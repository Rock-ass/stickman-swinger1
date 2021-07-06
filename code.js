var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a9885d76-2e6b-4346-9fec-5c7857f69fcc","6b2d55a4-ea15-4467-9b1b-241b729c3428","73a8a912-c8fe-457c-bfcd-ac6f000f5408","94c85906-07a4-4f1f-ae54-a9dad21011ce","ea41c811-76c5-4499-94e6-29862eb87d31","89e210c6-f4d9-48cd-9677-5b7ecfb934b2","59b2a020-c25b-4d5c-a2be-3f3cc11e9200","cb170b86-b792-432e-a7e0-a8109e60cffe","5e99d4d3-46a2-4699-9bff-d5c6b7a5931b","f10e4583-ad88-40c3-8261-a2389a64f762","ccac481d-342d-46b1-a176-80c75cea3b0c","0e4a1e74-2b4e-4f0f-b8be-25fcc2ff5547","d36eb563-7c88-4943-917e-1b4a5e977d8a","0f9b99f9-154d-4273-af13-da2051abb2f0","bcbadccc-dbf2-4c14-8ed7-9298f814425d","954d4643-31ad-47b4-83ed-c80b6a236e8e","20e0396d-4891-4fe6-8d7a-8de775622390","4fc22835-cc7f-4dce-96f9-5db501edfa30","a26d5bb4-f32e-4379-bacf-824779d0503e","a962b408-801f-4ecc-90f8-7b89bd1db516","2b7b03b5-b3a6-4fdc-9ef7-614e9886c1d8","427c0432-e142-489d-b1ae-cc4e75861bcd","6438b7ec-5ff7-4cd3-93d0-e0fe8c322b13","7aba5671-c5cc-4c71-9a87-b2ae3c637566","3fb4657f-fde4-445b-bc76-8e579b330a91","15d1389e-c2a6-4f4b-bc01-3d0c664ea66f","c6e9d8a2-308f-4f4c-a03a-d85262049a7e","51f6dfc1-2552-42a9-88c5-f81316483f27"],"propsByKey":{"a9885d76-2e6b-4346-9fec-5c7857f69fcc":{"name":"grid_1","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"o6q3yOB9wTnFdFNNBvr2cXzbkwzw8Eh6","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/a9885d76-2e6b-4346-9fec-5c7857f69fcc.png"},"6b2d55a4-ea15-4467-9b1b-241b729c3428":{"name":"grid_1_copy_2","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"TrD8qx6uBsEhaVdtlrgIgatd9f9txd7B","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/6b2d55a4-ea15-4467-9b1b-241b729c3428.png"},"73a8a912-c8fe-457c-bfcd-ac6f000f5408":{"name":"grid_1_copy_1","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"78.HE1JmPWUOe6.KbBPl2mTwjELio._S","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/73a8a912-c8fe-457c-bfcd-ac6f000f5408.png"},"94c85906-07a4-4f1f-ae54-a9dad21011ce":{"name":"grid_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":9,"looping":true,"frameDelay":2,"version":"h1pk20ZjlMBeCUguDLGlRCrXehze817s","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1500,"y":1500},"rootRelativePath":"assets/94c85906-07a4-4f1f-ae54-a9dad21011ce.png"},"ea41c811-76c5-4499-94e6-29862eb87d31":{"name":"swing","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"keZMgMPkHy0PD8ll15IteUyimz8kOBcB","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/ea41c811-76c5-4499-94e6-29862eb87d31.png"},"89e210c6-f4d9-48cd-9677-5b7ecfb934b2":{"name":"swingq","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"QNubWddmWYVPyyj6Nxt.eQPM4551J1Pt","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/89e210c6-f4d9-48cd-9677-5b7ecfb934b2.png"},"59b2a020-c25b-4d5c-a2be-3f3cc11e9200":{"name":"Stickman2","sourceUrl":null,"frameSize":{"x":35,"y":65},"frameCount":2,"looping":true,"frameDelay":2,"version":"bf9wEBFa28TplVYsVYgzvbVB9IHiXapK","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":65},"rootRelativePath":"assets/59b2a020-c25b-4d5c-a2be-3f3cc11e9200.png"},"cb170b86-b792-432e-a7e0-a8109e60cffe":{"name":"Stickman_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":35,"y":65},"frameCount":2,"looping":true,"frameDelay":2,"version":"ehCCtkwives4oJBddQjukup8sKQhJTK6","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":65},"rootRelativePath":"assets/cb170b86-b792-432e-a7e0-a8109e60cffe.png"},"5e99d4d3-46a2-4699-9bff-d5c6b7a5931b":{"name":"Stickman_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":35,"y":65},"frameCount":2,"looping":true,"frameDelay":2,"version":"5WNq0Nkc7BNVC64WX2Brgvo8s.FaNLYa","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":65},"rootRelativePath":"assets/5e99d4d3-46a2-4699-9bff-d5c6b7a5931b.png"},"f10e4583-ad88-40c3-8261-a2389a64f762":{"name":"Stickman","sourceUrl":null,"frameSize":{"x":35,"y":65},"frameCount":2,"looping":true,"frameDelay":2,"version":"pZFer2.ZhgbtHFhrlmFIG39dhnrQubSB","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":65},"rootRelativePath":"assets/f10e4583-ad88-40c3-8261-a2389a64f762.png"},"ccac481d-342d-46b1-a176-80c75cea3b0c":{"name":"Stickman_copy_1","sourceUrl":null,"frameSize":{"x":35,"y":65},"frameCount":2,"looping":true,"frameDelay":2,"version":"PvelmzRFhDiLcilRH2iv5dWckT6JKCD3","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":65},"rootRelativePath":"assets/ccac481d-342d-46b1-a176-80c75cea3b0c.png"},"0e4a1e74-2b4e-4f0f-b8be-25fcc2ff5547":{"name":"attackontitans","sourceUrl":null,"frameSize":{"x":35,"y":65},"frameCount":3,"looping":true,"frameDelay":3,"version":"DbVtL6y4CPZ.9t8cmRF5qGUXfU7fbLMg","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":130},"rootRelativePath":"assets/0e4a1e74-2b4e-4f0f-b8be-25fcc2ff5547.png"},"d36eb563-7c88-4943-917e-1b4a5e977d8a":{"name":"Wall","sourceUrl":null,"frameSize":{"x":59,"y":15},"frameCount":7,"looping":true,"frameDelay":2,"version":"74ZA6WYePEmNh9GE_2LaNfFl6DNb.Viq","loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":105},"rootRelativePath":"assets/d36eb563-7c88-4943-917e-1b4a5e977d8a.png"},"0f9b99f9-154d-4273-af13-da2051abb2f0":{"name":"start_button_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nyRJWJESfIiPuhNxLEtlh5NxwHEY6P_e/category_game_blocks/start_button.png","frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":2,"version":"nyRJWJESfIiPuhNxLEtlh5NxwHEY6P_e","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nyRJWJESfIiPuhNxLEtlh5NxwHEY6P_e/category_game_blocks/start_button.png"},"bcbadccc-dbf2-4c14-8ed7-9298f814425d":{"name":"Spike","sourceUrl":null,"frameSize":{"x":45,"y":45},"frameCount":13,"looping":true,"frameDelay":1,"version":"aD9o2TPPxIXP3x9Gb8_iJz0CWfs_W5Lg","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/bcbadccc-dbf2-4c14-8ed7-9298f814425d.png"},"954d4643-31ad-47b4-83ed-c80b6a236e8e":{"name":"Laser","sourceUrl":null,"frameSize":{"x":9,"y":57},"frameCount":3,"looping":true,"frameDelay":3,"version":"vLI0AgnmsScNv54iHtLcQrQ5S0sHQ_Vv","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":57},"rootRelativePath":"assets/954d4643-31ad-47b4-83ed-c80b6a236e8e.png"},"20e0396d-4891-4fe6-8d7a-8de775622390":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"},"4fc22835-cc7f-4dce-96f9-5db501edfa30":{"name":"news","sourceUrl":null,"frameSize":{"x":100,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"5.mFh1KNUMAoXysYNyYW4E0WtDJ.WbLL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":44},"rootRelativePath":"assets/4fc22835-cc7f-4dce-96f9-5db501edfa30.png"},"a26d5bb4-f32e-4379-bacf-824779d0503e":{"name":"platform","sourceUrl":null,"frameSize":{"x":100,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"w17ZRT8VtKyEK0CpLDBywXkxiQEEBdJy","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":22},"rootRelativePath":"assets/a26d5bb4-f32e-4379-bacf-824779d0503e.png"},"a962b408-801f-4ecc-90f8-7b89bd1db516":{"name":"flag","sourceUrl":null,"frameSize":{"x":33,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"bb9Czdz8jYZFH.gQeEHeRCaGvPwx8Vuw","loadedFromSource":true,"saved":true,"sourceSize":{"x":33,"y":72},"rootRelativePath":"assets/a962b408-801f-4ecc-90f8-7b89bd1db516.png"},"2b7b03b5-b3a6-4fdc-9ef7-614e9886c1d8":{"name":"grid_12","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"vIpetAgPGAfjCahpj.vNyktOTgOLrPi3","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/2b7b03b5-b3a6-4fdc-9ef7-614e9886c1d8.png"},"427c0432-e142-489d-b1ae-cc4e75861bcd":{"name":"Wall2","sourceUrl":null,"frameSize":{"x":179,"y":254},"frameCount":2,"looping":true,"frameDelay":12,"version":"FxlA4IS74CwJDU18J_Uc3BUcO2IcDMuG","loadedFromSource":true,"saved":true,"sourceSize":{"x":358,"y":254},"rootRelativePath":"assets/427c0432-e142-489d-b1ae-cc4e75861bcd.png"},"6438b7ec-5ff7-4cd3-93d0-e0fe8c322b13":{"name":"Spike3","sourceUrl":null,"frameSize":{"x":144,"y":144},"frameCount":2,"looping":true,"frameDelay":12,"version":"CBxEii0tbAD299TNNXQ5doyQhl5yY3BV","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":288},"rootRelativePath":"assets/6438b7ec-5ff7-4cd3-93d0-e0fe8c322b13.png"},"7aba5671-c5cc-4c71-9a87-b2ae3c637566":{"name":"Laser2","sourceUrl":null,"frameSize":{"x":183,"y":259},"frameCount":1,"looping":true,"frameDelay":12,"version":"aLy0M2IUqIly6.KPbT8IHB9x4p5Cjkqg","loadedFromSource":true,"saved":true,"sourceSize":{"x":183,"y":259},"rootRelativePath":"assets/7aba5671-c5cc-4c71-9a87-b2ae3c637566.png"},"3fb4657f-fde4-445b-bc76-8e579b330a91":{"name":"grid_111","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"XJ0zfTMdoam0L_MrnIbcbd3_Qx4XIuRt","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/3fb4657f-fde4-445b-bc76-8e579b330a91.png"},"15d1389e-c2a6-4f4b-bc01-3d0c664ea66f":{"name":"Wall23","sourceUrl":null,"frameSize":{"x":28,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"rbRUczupbOvl6FxJRSqCjl_Iomz_512U","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":13},"rootRelativePath":"assets/15d1389e-c2a6-4f4b-bc01-3d0c664ea66f.png"},"c6e9d8a2-308f-4f4c-a03a-d85262049a7e":{"name":"Spike23","sourceUrl":null,"frameSize":{"x":21,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"rTmtiCgoSIZ0qfBeiTzmDkyZFsTDQv0x","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":20},"rootRelativePath":"assets/c6e9d8a2-308f-4f4c-a03a-d85262049a7e.png"},"51f6dfc1-2552-42a9-88c5-f81316483f27":{"name":"Laser23","sourceUrl":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

showMobileControls(true, true, true, true);
var gravity;
var xChange;
var angle;
var angleAccel;
var angleVelocity;
var dt;
var l;
var swinging;
var swingDistances;
var currentSwing;
var closestSwing;
var time = 0;
var x;
var y;
var deltaL;
var backgrounds;
var bg1;
var bg2;
var bg3;
var swings;
var swing1;
var swing2;
var swing3;
var swing4;
var swing5;
var distanceCounter;
var mainChar;
var gameGoing;
var startButton;
var obstacles;
var obstacleTypes = ["Wall", "Spike", "Laser"];
//startGame and find inital values
playSound("assets/WhatsApp-Audio-2021-07-06-at-5.00.17-PM.mp3", false);
startGame();
thetaPositionCalc();
//this is game labs main function this runs 30 times a second and acts as a framerate
function draw() {
  time++;
  if (keyDown("1")) {
    backgrounds.setAnimationEach("grid_1_copy_2");
  }
  if (keyDown("2")) {
    backgrounds.setAnimationEach("grid_1_copy_1");
  }
  if (keyDown("3")) {
    backgrounds.setAnimationEach("grid_1_copy_1_copy_1");
  }
  if (keyDown("4")) {
    backgrounds.setAnimationEach("grid_11");
  }
  if (keyDown("up")) {
    mainChar.setAnimation("Stickman_copy_1");
  }
  if (keyDown("left")) {
    mainChar.setAnimation("Stickman");
  }
  if (keyDown("right")) {
    mainChar.setAnimation("Stickman_copy_1_copy_1");
  }
  if (keyDown("down")) {
    mainChar.setAnimation("Stickman_copy_1_copy_1_copy_1");
  }
  if(gameGoing){
    background("white");
    swinging = keyDown("space");
    
    //allow for background to be infinite
    for(var sprite=0;sprite<3;sprite++){
      if(backgrounds.get(sprite).x < -200){
        backgrounds.get(sprite).x += 900;
      }
      if(backgrounds.get(sprite).x > 700){
        backgrounds.get(sprite).x -= 900;
      }
    }
    
    //move sprite when out of bounds
    for(var sprite1=0;sprite1<5;sprite1++){
      if(swings.get(sprite1).x < -300){
        swings.get(sprite1).x += 1000;
      }
      if(swings.get(sprite1).x > 700){
        swings.get(sprite1).x -= 1000;
      }
    }
    
    //after click space have a set length and find inital angle.
    if(keyWentDown("space")){
      currentSwing = findClosestSwing(mainChar.x, mainChar.y);
      angle = Math.atan((swings.get(currentSwing).x - mainChar.x) / (swings.get(currentSwing).y - mainChar.y));
      l = Math.sqrt(Math.pow((swings.get(currentSwing).x - mainChar.x), 2) + Math.pow((swings.get(currentSwing).y - mainChar.y), 2));
    }
    
    if(!(swinging)){
      //when not swinging set character to not swinging and drop by gravity
      mainChar.setFrame(1);
      mainChar.velocityY -= gravity;
    } else {
      //set to swinging animation
      mainChar.setFrame(0);
      //find angle velocity
      thetaPositionCalc();
      //find x and y relative to swing
      x = swings.get(currentSwing).x - mainChar.x;
      y = swings.get(currentSwing).y - mainChar.y + 20;
      //change in x with change in L as if character is "climbing" up as he swings (negative because background moves opposite character)
      xChange = -1 * (Math.cos(angle) * angleVelocity) * l * dt;
      //change in y from x-velocity
      mainChar.velocityY = 0.5 * Math.pow(Math.pow(l, 2) - Math.pow(x, 2), -0.5) * (0 - (2 * x * (xChange))) - 1;
      
      //Set velocities of all characters
      swings.setVelocityXEach(xChange);
      backgrounds.setVelocityXEach(xChange);
      distanceCounter.velocityX = xChange;
      obstacles.setVelocityXEach(xChange);
    }
    
    //every half frame checks for a spawn with 30% chance of spawn
    if(time == 15){
      spawnObstacle(randomNumber(1,10), findCurrentChars());
      time = 0;
    }
    
    //anything after this is prioritized to be on top
    if (keyWentDown("e")) {
      prompt("hey! welcome to my game, I'm blockhead manic.if you want you can join my discord sever called blockheadmanic codeseverfor some more games check q and how to play check p");
    }
    if (keyWentDown("q")) {
      prompt("");
    }
    if (keyWentDown("p")) {
      prompt("click space to swing, go as far as you can.");
    }
    drawSprites();
    
    
   
    //add distance traveled
    textSize(32);
    textAlign(LEFT, TOP);
    textFont("Courier New");
    fill("blue");
    stroke("black");
    text(Math.round(Math.abs(distanceCounter.x / 20)) + "m",5,5);
    //if he is swinging add the rope to the character.
    if(swinging){
      line(mainChar.x + 14,mainChar.y - 17,swings.get(currentSwing).x - 2,swings.get(currentSwing).y + 40);
    }
    
    //check if player is dead
    isDead();
  } else {
    if(mousePressedOver(startButton)  || keyWentDown("space")){
      startGame();
    }
  }
}

//determines if player is dead
function isDead(){
  if(mainChar.y > 326 || mainChar.y < 60 || obstacles.isTouching(mainChar) || distanceCounter.x > 400){
      gameGoing = false;
      distanceCounter.velocityX = 0;
      for(var s=0;s<World.allSprites.length;s++){
        World.allSprites.get(s).visible = false;
      }
      background("gray");
      startButton = createSprite(200,200);
      startButton.setAnimation("start_button_1");
      startButton.setCollider("rectangle", 0, 0, 108, 48);
      textAlign(CENTER, CENTER);
      if (distanceCounter.x < 0){
        text("Your Score: " + Math.round(Math.abs(distanceCounter.x / 20)) + "m", 200, 100);
      } else {
        textSize(50);
        text("Swinging man", 200, 50);
        textSize(25);
        text("Your Score: 0m", 200, 150);
        textSize(20);
        noStroke();
        text("e to see how to play and more!", 200, 350);
        text("arrow keys changes player, enjoy", 200, 365);
        textSize(15);
        text("1,2,3 changes background.", 200, 230);
        text("new update is done! hope you enjoy(spiderman)", 200, 250);
      }
      drawSprites();
    }
}

//find the angle values of the character when swinging
function thetaPositionCalc(){
  angleAccel = (gravity / l) * Math.sin(angle);
  angleVelocity += angleAccel * dt;
  angle += angleVelocity * dt;
}

//list of distances to each swing then find the closest swing through iteration and comparison
function findClosestSwing(playerX, playerY){
  for(var sprite2 = 0;sprite2 < 5;sprite2++){
    swingDistances[sprite2] = Math.sqrt(Math.pow((swings.get(sprite2).x - playerX), 2) + Math.pow((swings.get(sprite2).y - playerY), 2));
  }
  var min = 0;
  for(var i=0;i<5;i++){
    if(swingDistances[i] < swingDistances[min]){
      min = i;
    }
  }
  return min;
}

//tries to spawn an obstacle given the chance of spawning and number of obstacles already present
function spawnObstacle(chance, numCurrentChars){
  if(chance < 4 && numCurrentChars < 2){
    obstacles.add(createSprite(500,randomNumber(100,300)));
    obstacles.get(obstacles.length - 1).setAnimation(obstacleTypes[randomNumber(0,2)]);
  }
}

//finds the number of obstacles currently on the screen
function findCurrentChars(){
  var count = 0;
  for(var sprite=0;sprite<obstacles.length;sprite++){
    if(obstacles.get(sprite).x > 0){
      count++;
    }
  }
  return count;
}

//doesn't work as game lab does not have data compatibility
//finds score when game ends and compares with highscores
/*function checkScore(score){
  textAlign(CENTER, CENTER);
  text("Your Score: " + score + "m", 200, 70);
  if(SwingGameHighscore.beatHighscore(score)){
    text("New High Score!", 200, 30);
    text("Your Old High Score: " + SwingGameHighscore.getUserScore() + "m", 200, 110);
    text("All Time High Score: " + SwingGameHighscore.highscore() + "m", 200, 150);
  } else {
    text("Your High Score: " + SwingGameHighscore.getUserScore() + "m", 200, 110);
    text("All Time High Score: " + SwingGameHighscore.highscore() + "m", 200, 150);
  }
  SwingGameHighscore.setHighscore(score);
}*/

//starts and resets the game to start over
function startGame(){
  gravity = -0.75;
  xChange = 0;
  angle = 0;
  angleAccel;
  angleVelocity = 0;
  dt = 2;
  l = 150;
  swinging = false;
  swingDistances = [0, 0, 0, 0, 0];
  currentSwing = 0;
  closestSwing = 0;
  time;
  x = 0;
  y = 0;
  deltaL = -0.5;
  strokeWeight(3);
  time = 0;
  backgrounds = createGroup();
  bg1 = createSprite(0,200);
  bg2 = createSprite(300,200);
  bg3 = createSprite(600,200);
  backgrounds.add(bg1);
  backgrounds.add(bg2);
  backgrounds.add(bg3);
  backgrounds.setAnimationEach("grid_1");
  swings = createGroup();
  swing1 = createSprite(200,0);
  swing2 = createSprite(400,0);
  swing3 = createSprite(600,0);
  swing4 = createSprite(800,0);
  swing5 = createSprite(1000,0);
  swings.add(swing1);
  swings.add(swing2);
  swings.add(swing3);
  swings.add(swing4);
  swings.add(swing5);
  swings.setAnimationEach("swing");
  swings.setScaleEach(0.3);
  distanceCounter = createSprite(0,-500);
  obstacles = createGroup();
  mainChar = createSprite(100,150);
  mainChar.setAnimation("Stickman");
  mainChar.pause();
  mainChar.setCollider("rectangle", 5, 0, 24, 36);
  for(var s=0;s<World.allSprites.length;s++){
    World.allSprites.get(s).visible = true;
  }
  gameGoing = true;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
