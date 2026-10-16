// Reformats a name from 'Last, First' to 'First Last'
export function formatName(name: string) {
    const parts = name.split(",");

    if (parts.length !== 2) {
        return name.trim();
    }

    const lastName = parts[0].trim();
    const firstName = parts[1].trim();

    return `${firstName} ${lastName}`;
}