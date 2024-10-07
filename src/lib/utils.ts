import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDate, formatDistanceToNowStrict } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRelativeDate(from: Date) {
  const current = new Date();
  if (current.getTime() - from.getTime() < 1000 * 60 * 60 * 24) {
    return formatDistanceToNowStrict(from, { addSuffix: true, roundingMethod: "floor" });
  } else {
    if (current.getFullYear() === from.getFullYear()) {
      return formatDate(from, "MMM d");
    } else {
      return formatDate(from, "MMM d, yyyy");
    }
  }
}