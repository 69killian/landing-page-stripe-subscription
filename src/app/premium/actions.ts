"use server"

import prisma from '@/db/prisma';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { subscribe } from 'diagnostics_channel';

// verifiy if the account is premium for the navbar
export async function isUserSubscribed() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return {success: false};

  const existingUser = await prisma.user.findUnique({where: { id: user.id } });

  if (!existingUser) return { success: false };

  return { success: true, subscribed: existingUser.plan === 'premium' };
}
