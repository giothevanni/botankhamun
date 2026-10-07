<script setup lang="ts">

import { store } from './store.js';
import ActionPyramid from './components/ActionPyramid.vue'
import Maat from './components/Maat.vue';

import ScoringScreen from './components/ScoringScreen.vue';
import GameSetup from './components/GameSetup.vue';

import Footer from './components/Footer.vue';

</script>

<style>

    .app-header {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      background-color: #b94c48;
      box-shadow: 0px 2px 10px rgba(50,50,50,0.7);
      border-bottom: 2px solid #d87f7c;
      margin-bottom: 15px;
    }

    h1 {
      color: #ffffff;
      text-shadow: 0px 1px 4px #875500;
      margin: 0;
      font-size: 30px;
    }


    .margin-top {
      margin-top: 10px;
    }
</style>

<template>

  <div class="app-header">
      <h1>BOTANKHAMUN APP</h1>
  </div>

  <GameSetup v-if="store.screen == store.SETUP_SCREEN" />
  <ActionPyramid v-if="store.screen == store.GAME_SCREEN" />
  <Maat v-if="store.screen == store.MAAT_SCREEN" />
  <ScoringScreen v-if="store.screen == store.SCORE_SCREEN" />

  <Footer />


</template>
