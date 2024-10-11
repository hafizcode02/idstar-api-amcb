import prisma from "../config/database";
import { hashPassword, comparePasswords } from "../utils/password.util";
import { generateToken } from "../utils/jwt.util";

export async function register(email: string, password: string, name?: string) {
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword, name },
  });
  const token = generateToken(user.id);
  return { user, token };
}

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const isPasswordValid = await comparePasswords(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }
  const token = generateToken(user.id);
  return { user, token };
}

export async function checkUserExists(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  return Boolean(user);
}
