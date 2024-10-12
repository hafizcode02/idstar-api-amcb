import prisma from "../config/database";

export function getAllTechModules(search: string = "") {
  if (search) {
    return prisma.techModule.findFirstOrThrow({
      where: {
        name: search,
      },
      select: {
        name: true,
        slugName: true,
        code: true,
      },
    });
  }
  
  return prisma.techModule.findMany();
}

export function isTechModuleExists(slugName: string) {
  return prisma.techModule.findFirst({ where: { slugName } });
}

export function createTechModules(
  data: {
    name: string;
    slugName: string;
    code: string;
  },
  userId: number
) {
  return prisma.techModule.create({ data: { ...data, userId } });
}

export function getTechModules(id: number) {
  return prisma.techModule.findFirstOrThrow({ where: { id } });
}

export function updateTechModules(id: number, data: any) {
  return prisma.techModule.update({
    where: { id },
    data,
  });
}

export function deleteTechModules(id: number) {
  return prisma.techModule.delete({
    where: { id },
  });
}
