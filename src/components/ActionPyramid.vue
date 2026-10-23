<script setup lang="ts">
// import { ref } from 'vue'
import { store } from '../store.js';
import Actions from './Actions.vue';
import ActionTile from './ActionTile.vue';


</script>
<style>
.pyramid-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.pyramid-row-1 {
  grid-column: 1 / -1;
}

.pyramid-row-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-column: 1 / -1;
}

.pyramid-row-3 {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  grid-column: 1 / -1;
}

.pyramid-row-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-column: 1 / -1;
}

    .pyramid-column {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pyramid-column--left-edge {
        justify-content: right;
    }

    .pyramid-column--right-edge {
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
    
    .horus-bonus-table {
        margin: 0 auto;
        margin-top: 10px;
    }

    .horus-bonus-table,
    .horus-bonus-table td {
        border: 1px solid #333;
        border-collapse: collapse;
        padding: 4px 16px;
        font-size: 14px;
    }

    .horus-bonus-table__img {
        max-width: 22px;
        margin: 0 3px;
        transform: translateY(2px);
    }

    .horus-bonus-table__img-seth {
        max-width: 34px;
        margin: 0;
        transform: translateY(5px);
    }

    .u-text-s {
        font-size: 14px;
    }
</style>

<template>
    <section id="center">
        <div class="pyramid">

            <div class="pyramid-grid">
                <div class="pyramid-row pyramid-row-1">
                    <div class="pyramid-column">
                        <ActionTile :row="0" :column="0" />
                    </div>
                </div>
                <div class="pyramid-row pyramid-row-2">
                    <div class="pyramid-column pyramid-column--left-edge">
                        <ActionTile :row="1" :column="0" />
                    </div>
                    <div class="pyramid-column pyramid-column--right-edge">
                        <ActionTile :row="1" :column="1" />
                    </div>
                </div>
                
                <div class="pyramid-row pyramid-row-3">
                    <div class="pyramid-column pyramid-column--left-edge">
                        <ActionTile :row="2" :column="0" />
                    </div>
                    <div class="pyramid-column">
                        <ActionTile :row="2" :column="1" />
                    </div>
                    <div class="pyramid-column pyramid-column--right-edge">
                        <ActionTile :row="2" :column="2" />
                    </div>
                </div>
                <div class="pyramid-row pyramid-row-4">
                    <div class="pyramid-column pyramid-column--left-edge">
                        <ActionTile :row="3" :column="0" />
                    </div>
                    <div class="pyramid-column">
                        <ActionTile :row="3" :column="1" />
                    </div>
                    <div class="pyramid-column">
                        <ActionTile :row="3" :column="2" />
                    </div>
                    <div class="pyramid-column pyramid-column--right-edge">
                        <ActionTile :row="3" :column="3" />
                    </div>
                </div>
            </div>
            
            
            <p class="turn-number">
                <strong>
                    Turn {{ store.turnNumber }} of 16
                </strong>
            </p>

            <div class="u-spacer"></div>

            <strong>Botankhamun's Horus Bonus Reminder</strong><br>
            <span class="u-text-s">only triggered on <strong>God actions</strong> by either player</span>
            
            
            <table class="horus-bonus-table">
                <tbody>
                    <tr>
                        <td><img class="horus-bonus-table__img" src="/die-1-small.png" title="One"> or <img class="horus-bonus-table__img" src="/die-2-small.png" title="Two"></td>
                        <td>1 Scribe</td>
                    </tr>
                    <tr>
                        <td><img class="horus-bonus-table__img" src="/die-3-small.png" title="Three"> or <img class="horus-bonus-table__img" src="/die-4-small.png" title="Four">
                            <span v-if="store.settings.isExpansionEnabled"> or <img class="horus-bonus-table__img-seth" src="/seth.png" title="Seth"></span>
                        </td>
                        <td>1 Victory Point</td>
                    </tr>
                    <tr>
                        <td><img class="horus-bonus-table__img" src="/die-5-small.png" title="Five"> or <img class="horus-bonus-table__img" src="/die-6-small.png" title="Six"></td>
                        <td>1 Scribe and 1 Victory Point</td>
                    </tr>
                </tbody>
            </table>
            <div class="u-spacer"></div>
            
        </div>
        <Actions />
    </section>

</template>
