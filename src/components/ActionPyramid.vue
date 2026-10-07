<script setup lang="ts">
// import { ref } from 'vue'
import { store } from '../store.js';
import Actions from './Actions.vue';
import ActionTile from './ActionTile.vue';


</script>
<style>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.row-1 {
  grid-column: 1 / -1;
}

.row-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-column: 1 / -1;
}

.row-3 {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  grid-column: 1 / -1;
}

.row-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-column: 1 / -1;
}

    .column {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .column--left-edge {
        justify-content: right;
    }

    .column--right-edge {
        justify-content: left;
    }


    .action-tile {
        align-items: center;
        background: #e1c28d;
        color: #000;
        display: flex;
        font-size: 12px;
        width: 80px;
        /* height: 52px; */
        justify-content: center;
        line-height: 1;
        box-shadow: 2px 2px 3px rgba(50,50,50,0.7);

        @media (min-width: 700px) {
            width: 120px;
        }
    }

    .action-tile img {
        max-width: 100%;
    }

    .active-tile {
        background: rgb(112, 209, 112);
        position: relative;
    }

    .active-tile::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0 147 255 / 20%);
        border: 2px solid #0ca6b4;
        box-sizing: border-box;
        box-shadow: 0 0 6px #0ca6b4;
    }


    .turn-number {
        color: #53401f;
        font-size: 16px;
        margin-top: 15px;
    }
</style>

<template>
    <section id="center">
        <div class="pyramid">

            <div class="grid">
                <div class="row row-1">
                    <div class="column">
                        <ActionTile :row="0" :column="0" />
                    </div>
                </div>
                <div class="row row-2">
                    <div class="column column--left-edge">
                        <ActionTile :row="1" :column="0" />
                    </div>
                    <div class="column column--right-edge">
                        <ActionTile :row="1" :column="1" />
                    </div>
                </div>
                
                <div class="row row-3">
                    <div class="column column--left-edge">
                        <ActionTile :row="2" :column="0" />
                    </div>
                    <div class="column">
                        <ActionTile :row="2" :column="1" />
                    </div>
                    <div class="column column--right-edge">
                        <ActionTile :row="2" :column="2" />
                    </div>
                </div>
                <div class="row row-4">
                    <div class="column column--left-edge">
                        <ActionTile :row="3" :column="0" />
                    </div>
                    <div class="column">
                        <ActionTile :row="3" :column="1" />
                    </div>
                    <div class="column">
                        <ActionTile :row="3" :column="2" />
                    </div>
                    <div class="column column--right-edge">
                        <ActionTile :row="3" :column="3" />
                    </div>
                </div>
            </div>
            
            
            <p class="turn-number">
                <strong>
                    Turn {{ store.turnNumber }} of 16
                </strong>
            </p>
            
            
            
            
        </div>
        <Actions />
    </section>

</template>
