import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



// mongodb+srv://killiancodes69:qBYqaGUnuh2d3TZx@cluster0.k1wtt.mongodb.net/stripe_db