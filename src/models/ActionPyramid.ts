import bastetImage from '../assets/bastet-tile.png';
import hathorImage from '../assets/hathor-tile.png';
import horusImage from '../assets/horus-tile.png';
import osirisImage from '../assets/osiris-tile.png';
import raImage from '../assets/ra-tile.png';
import thothImage from '../assets/thoth-tile.png';
import resourceBreadImage from '../assets/resource-bread-tile.png';
import resourcePapyrusImage from '../assets/resource-papyrus-tile.png';
import resourceGraniteImage from '../assets/resource-granite-tile.png';
import resourceLimestoneImage from '../assets/resource-limestone-tile.png';


type ActionTile = {
    type: string;
    title: string;
    image: string;
};

let allActions: ActionTile[] = [
    { type: "god", title: "Bastet", image: bastetImage },
    { type: "god", title: "Ra", image: raImage },
    { type: "god", title: "Osiris", image: osirisImage },
    { type: "god", title: "Thoth", image: thothImage },
    { type: "god", title: "Hathor", image: hathorImage },
    { type: "god", title: "Horus", image: horusImage },
    { type: "resource", title: "Bread", image: resourceBreadImage },
    { type: "resource", title: "Granite", image: resourceGraniteImage },
    { type: "resource", title: "Limestone", image: resourceLimestoneImage },
    { type: "resource", title: "Papyrus", image: resourcePapyrusImage },
];

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

class ActionPyramid {
    private tiles: ActionTile[][];
    private currentRow: number;
    private currentCol: number;

    constructor() {
        this.tiles = this.generatePyramid(3);
        this.currentRow = this.tiles.length - 1; // Start at the bottom row
        this.currentCol = 0; // Start at the bottom-left tile
    }

    private generatePyramid(size: number): ActionTile[][] {
        const pyramid: ActionTile[][] = [];

        let pyramidActions = [...allActions];


        for (let row = 0; row <= size; row++) {
            const rowTiles: ActionTile[] = [];
            for (let col = 0; col <= row; col++) {
                let tile = pyramidActions.splice(getRandomInt(pyramidActions.length), 1)[0];
                rowTiles.push(tile);
                
            }
            pyramid.push(rowTiles);
        }
        console.log(pyramid);


        return pyramid;
    }

    public navigate(): ActionTile | null {
        if (this.currentRow === 0) {
            return null; // Already at the top
        }

        const isAtEndOfRow = this.currentCol >= this.tiles[this.currentRow].length - 1;

        if (isAtEndOfRow) {
            return null;
        }

        const coinFlip = Math.round(Math.random() * 100) % 2; // Simulate a coin flip
        if (coinFlip) {
            // Move upward
            this.currentRow--;
        } else {
            // Move right
            this.currentCol++;
        }
        return this.getCurrentTile();
    }

    public getCurrentTile(): ActionTile {
        console.log(`Current Position: Row ${this.currentRow}, Col ${this.currentCol}`);
        return this.tiles[this.currentRow][this.currentCol];
    }
    
    public getPyramid(): ActionTile[][] {
        return this.tiles;
    }

    public getCurrentCol(): number {
        
        return this.currentCol;
    }

    public getCurrentRow(): number {
        
        return this.currentRow;
    }

    public isAtEndOfPyramid(): boolean {
        return this.currentRow === 0 && this.currentCol >= this.tiles[this.currentRow].length - 1;
    }

    public reset(): void {
        this.currentRow = this.tiles.length - 1; // Reset to the bottom row
        this.currentCol = 0; // Reset to the bottom-left tile

        console.log("Pyarmid reset!");
        this.tiles = this.generatePyramid(3); // Regenerate the pyramid

        this.getCurrentTile(); 

    }
}

export default ActionPyramid;
