// Converts PostgreSQL datetime string to Temporal datetime
export function toTemporalDateTime(dateTime: string) {
    return Temporal.PlainDateTime.from(
        dateTime.replace(" ", "T")
    );
}

export function getUser(userId: number) {
  return userId;
}

export function createUser(firstName: string, lastName: string, email: string, wantsUpdates: boolean) {
  return { success: true, userId: 5623456 };
}