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

// Expansion tiles
import sethImage from '../assets/seth-tile3.png';
import priestsAndSoldiersIage from '../assets/priests-and-soldiers-tile3.png';


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

let expansionActions: ActionTile[] = [
    { type: "god", title: "Seth", image: sethImage },
    { type: "expansion", title: "Soldiers & Priests", image: priestsAndSoldiersIage },
];

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

class ActionPyramid {
    private tiles: ActionTile[][];
    private currentRow: number;
    private currentCol: number;
    private pyramidActions: ActionTile[];

    constructor() {
        // this.tiles = this.generatePyramid(withExpansionTiles);
        this.currentRow = 3; // Start at the bottom row
        this.currentCol = 0; // Start at the bottom-left tile

        this.pyramidActions = [...allActions];
        this.tiles = this.generatePyramid();
    }

    public setActionsForTheGame(withExpansionTiles: boolean = false): void {
        if (withExpansionTiles) {

            let baseGameActions = [...allActions];

            let godActions = baseGameActions.filter(action => action.type === "god");
            let randomIndex = getRandomInt(godActions.length);
            godActions.splice(randomIndex, 1);

            let resourceActions = baseGameActions.filter(action => action.type === "resource");
            randomIndex = getRandomInt(resourceActions.length);
            resourceActions.splice(randomIndex, 1);

            this.pyramidActions = [...godActions, ...resourceActions, ...expansionActions];
        } else {
            this.pyramidActions = [...allActions];
        }
    }

    public generatePyramid(): ActionTile[][] {
        const pyramid: ActionTile[][] = [];

        let pyramidActions = [];
        pyramidActions = [...this.pyramidActions];
        
        for (let row = 0; row <= 3; row++) {
            const rowTiles: ActionTile[] = [];
            for (let col = 0; col <= row; col++) {
                let tile = pyramidActions.splice(getRandomInt(pyramidActions.length), 1)[0];
                rowTiles.push(tile);
                
            }
            pyramid.push(rowTiles);
        }
        console.log(pyramid);

        this.tiles = pyramid


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
        this.tiles = this.generatePyramid(); // Regenerate the pyramid

        this.getCurrentTile(); 

    }
}

export default ActionPyramid;
