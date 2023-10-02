export const AppTools = {
    paginate(page: number) {
        const count = 10;
        const start = page > 1 ? (count * page) - count : 0;
        const end = count * page;
        return { start, end }
    },
    sortAscByName(list: any) {
        return list.sort((a: any, b: any) => {
            const nameA = a.name[0];
            const nameB = b.name[0];

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
    },
    extractColors(imageElement: HTMLImageElement) {
        const canvas = document.createElement('canvas');
        canvas.width = imageElement.width;
        canvas.height = imageElement.height;
        const context: any = canvas.getContext('2d');
        context.drawImage(imageElement, 0, 0);
        const imageData = context.getImageData(Math.round(canvas.width / 2), Math.round(canvas.height / 2), canvas.width, canvas.height);
        const data = imageData.data;
        const colors: string[] = [];
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const color = `rgb(${r},${g},${b})`;
            if (!colors.includes(color)) {
                colors.push(color);
            }
        }
        return this.findMostColorfulColor(colors)
    },
    findMostColorfulColor(colors: string[]): string {
        let maxColorfulness = -1;
        let mostColorfulColor = '';

        colors.forEach(color => {
            const match = color.match(/\d+/g);
            if (match) {
                const r = parseInt(match[0]);
                const g = parseInt(match[1]);
                const b = parseInt(match[2]);
                const max = Math.max(r, g, b);
                const min = Math.min(r, g, b);
                const chroma = (max - min) / 180;
                const colorfulness = (max - min) + (max + min) * chroma;
                if (colorfulness > maxColorfulness) {
                    maxColorfulness = colorfulness;
                    mostColorfulColor = color;
                }
            }
        });

        return mostColorfulColor.replace(')', ',10%)');
    }
}