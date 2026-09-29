<script setup lang="ts">
// import { ref } from 'vue'
import { store } from '../store.js';

import ActionPyramid from '../models/ActionPyramid.ts';
import Actions from './Actions.vue';


// let actionPyramid = ref(new ActionPyramid());

store.pyramid = new ActionPyramid();

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

    /* .pyramid-row--1 {
        grid-row: 1fr;
    }

    .pyramid-row--2 {
        grid-row: 1fr 1fr;
    }

    .pyramid-row--3 {
        grid-row: 1fr 1fr 1fr;
    } */

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
        width: 120px;
        /* height: 52px; */
        justify-content: center;
        line-height: 1;
        box-shadow: 2px 2px 3px rgba(50,50,50,0.7);
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
</style>

<template>
  <section id="center">
    <button type="button" class="counter" @click="store.resetGame()">
      New Game
    </button>
    <div class="grid">
        <div class="row row-1">
            <div class="column">

                <div class="action-tile"
                :class="{ 'active-tile': store.pyramid.getCurrentRow() === 0 && store.pyramid.getCurrentCol() === 0 }"
                
                >
                    <img :src="store.pyramid.getPyramid()[0][0].image" 
                        :title="store.pyramid.getPyramid()[0][0].title"
                    />
                </div>
            </div>
        </div>

        <div class="row row-2">
            <div class="column column--left-edge">
                
                <div class="action-tile"
                :class="{ 'active-tile': store.pyramid.getCurrentRow() === 1 && store.pyramid.getCurrentCol() === 0 }"
                
                >
                    <img :src="store.pyramid.getPyramid()[1][0].image" 
                        :title="store.pyramid.getPyramid()[1][0].title"
                    />
                </div>
            </div>
            <div class="column column--right-edge">

                <div class="action-tile"
                    :class="{ 'active-tile': store.pyramid.getCurrentRow() === 1 && store.pyramid.getCurrentCol() === 1 }"
                >
                    <img :src="store.pyramid.getPyramid()[1][1].image" 
                        :title="store.pyramid.getPyramid()[1][1].title"
                    />
                </div>
            </div>
        </div>

        <div class="row row-3">
            <div class="column column--left-edge">
                <div 
                    class="action-tile"
                    :class="{ 'active-tile': store.pyramid.getCurrentRow() === 2 && store.pyramid.getCurrentCol() === 0 }"
                >
                    <img :src="store.pyramid.getPyramid()[2][0].image" 
                        :title="store.pyramid.getPyramid()[2][0].title"
                    />
                </div>
            </div>
            <div class="column">

                <div class="action-tile"
                    :class="{ 'active-tile': store.pyramid.getCurrentRow() === 2 && store.pyramid.getCurrentCol() === 1 }"
                >
                    <img :src="store.pyramid.getPyramid()[2][1].image" 
                        :title="store.pyramid.getPyramid()[2][1].title"
                    />
                </div>
            </div>
            <div class="column column--right-edge">
                <div class="action-tile"
                    :class="{ 'active-tile': store.pyramid.getCurrentRow() === 2 && store.pyramid.getCurrentCol() === 2 }"
                >
                    <img :src="store.pyramid.getPyramid()[2][2].image" 
                        :title="store.pyramid.getPyramid()[2][2].title"
                    />
                </div>
            </div>
        </div>
        <div class="row row-4">
            <div class="column column--left-edge">
                <div 
                    class="action-tile"
                    :class="{ 'active-tile': store.pyramid.getCurrentRow() === 3 && store.pyramid.getCurrentCol() === 0 }"
                >
                     <img :src="store.pyramid.getPyramid()[3][0].image" 
                            :title="store.pyramid.getPyramid()[3][0].title"
                            />
                </div>
            </div>
            <div class="column">

                <div class="action-tile"
                    :class="{ 'active-tile': store.pyramid.getCurrentRow() === 3 && store.pyramid.getCurrentCol() === 1 }" 
                >
                    <img :src="store.pyramid.getPyramid()[3][1].image" 
                        :title="store.pyramid.getPyramid()[3][1].title"
                    />
                </div>
            </div>

            <div class="column">

                <div class="action-tile"
                :class="{ 'active-tile': store.pyramid.getCurrentRow() === 3 && store.pyramid.getCurrentCol() === 2 }"
                >
                    <img :src="store.pyramid.getPyramid()[3][2].image" 
                        :title="store.pyramid.getPyramid()[3][2].title"
                    />
                </div>
            </div>
            <div class="column column--right-edge">

                <div class="action-tile"
                    :class="{ 'active-tile': store.pyramid.getCurrentRow() === 3 && store.pyramid.getCurrentCol() === 3 }"
                >
                    <img :src="store.pyramid.getPyramid()[3][3].image" 
                        :title="store.pyramid.getPyramid()[3][3].title"
                    />
                </div>
            </div>
        </div>
    </div>


    Turn {{ store.turnNumber }} of 16



    <button 
        v-if="store.turnNumber < 16"
        type="button" class="counter" @click="store.takeTurn()">
      Take turn
    </button>




    <Actions />
  </section>

</template>
