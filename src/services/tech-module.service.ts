import prisma from "../config/database";

export function getTechModules() {
  return prisma.techModule.findMany();
}