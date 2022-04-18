interface SeedData {
    entries: SeedEntry[],
}

interface SeedEntry {
    description: string,
    status: string,
    createdAt: number,
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'En Progreso: Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'in-progress',
            createdAt: Date.now()
        },
        {
            description: 'Terminado: Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'finished',
            createdAt: Date.now()
        },
    ]
}