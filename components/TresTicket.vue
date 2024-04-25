
<script setup lang="ts">
</script>


<template>
  <TresCanvas clear-color="#82DBC5">
    <TresPerspectiveCamera :position="[0, 0, 13]" :fov="25" />
    <TresPhysics debug interpolate :gravity="[0, -40, 0]" :timeStep="1 / 60">
      <TresBand />
    </TresPhysics>
  </TresCanvas>
</template>
