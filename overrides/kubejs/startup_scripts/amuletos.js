// Listen to item registry event
StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('amberusamuleto').unstackable().displayName('Amuleto de Amberus').tooltip('Este amuleto emana calor ao toque').tag('curios:necklace')
  event.create('hydraamuleto').unstackable().displayName('Amuleto de Hydra').tooltip('Este amuleto emana um ar salgado').tag('curios:necklace')
  event.create('gaiaamuleto').unstackable().displayName('Amuleto de Gaia').tooltip('Este amuleto emana um cheiro floral suave').tag('curios:necklace')
  event.create('solaramuleto').unstackable().displayName('Amuleto de Solar').tooltip('Este amuleto emana uma luz em sua frente').tag('curios:necklace')
  event.create('lunaraamuleto').unstackable().displayName('Amuleto de Lunara').tooltip('Este amuleto emana sombras como fumaça abaixo dele').tag('curios:necklace')
  event.create('caosamuleto').unstackable().displayName('Amuleto de Caos').tooltip('Este amuleto emana tudo').tag('curios:necklace')
})