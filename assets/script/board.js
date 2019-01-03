class Board {


init (){
    this.addCommunityChestLeft("target" , 2 , boardTiles[2]);
        this.addCommunityChestTop("target" , 17 , boardTiles[17]);
        this.addCommunityChestBottom("target" , 33 , boardTiles[33]);
        this.addPropertyLeft("target" , 1 , boardTiles[1]);
        this.addPropertyLeft("target" , 3 , boardTiles[3]);
        this.addPropertyLeft("target" , 6 , boardTiles[6]);
        this.addPropertyLeft("target" , 8 , boardTiles[8]);
        this.addPropertyLeft("target" , 9 , boardTiles[9]);
        this.addPropertyTop("target" , 11 , boardTiles[11]);
        this.addPropertyTop("target" , 13 , boardTiles[13]);
        this.addPropertyTop("target" , 14 , boardTiles[14]);
        this.addPropertyTop("target" , 16 , boardTiles[16]);
        this.addPropertyTop("target" , 18 , boardTiles[18]);
        this.addPropertyTop("target" , 19 , boardTiles[19]);
        this.addPropertyRight("target" , 21 , boardTiles[21]);
        this.addPropertyRight("target" , 23 , boardTiles[23]);
        this.addPropertyRight("target" , 24 , boardTiles[24]);
        this.addPropertyRight("target" , 26 , boardTiles[26]);
        this.addPropertyRight("target" , 27 , boardTiles[27]);
        this.addPropertyRight("target" , 29 , boardTiles[29]);
        this.addPropertyBottom("target" , 31 , boardTiles[31]);
        this.addPropertyBottom("target" , 32 , boardTiles[32]);
        this.addPropertyBottom("target" , 34 , boardTiles[34]);
        this.addPropertyBottom("target" , 37 , boardTiles[37]);
        this.addPropertyBottom("target" , 39 , boardTiles[39]);
        this.addRailRoadLeft("target" , 5 , boardTiles[5]);
        this.addRailRoadTop("target" , 15 , boardTiles[15]);
        this.addRailRoadRight("target" , 25 , boardTiles[25]);
        this.addRailRoadBottom("target" , 35 , boardTiles[35]);
        this.addIncomeTax();
        this.addChanceLeft();
        this.addChanceRight();
        this.addChanceBottom();
        this.addGo();
        this.addJail();
        this.addElectricCompany();
        this.addWaterWorks();
        this.addLuxury();
        this.addGoToJail();
        this.addFrePark();
}

    addPropertyLeft(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_left_' + argPlace + '"></div>');
        var $newProperty = $("<div class='cardLeft' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="cardLeft-title"></div>');
        var $newPropertyBody = $('<div class="cardLeft-body"></div>');
        var $newPropertyUpgrades = $('<div class="cardLeft-upgrades"></div>');
        var $newPropertyFooter = $('<div class="cardLeft-footer"></div>');

        $newPropertyTitle.css("background-color", argProperty.color_code);
        $newPropertyBody.append('<p class="tile-text-left">' + argProperty.name + '</p>');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyFooter.append('<h4 class="tile-text-left">$' + argProperty.price + '</h4>');
        $newProperty.append($newPropertyTitle, $newPropertyBody, $newPropertyUpgrades, $newPropertyFooter);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addPropertyRight(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_Right_' + argPlace + '"></div>');
        var $newProperty = $("<div class='cardRight' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="cardRight-title"></div>');
        var $newPropertyBody = $('<div class="cardRight-body"></div>');
        var $newPropertyUpgrades = $('<div class="cardRight-upgrades"></div>');
        var $newPropertyFooter = $('<div class="cardRight-footer"></div>');

        $newPropertyTitle.css("background-color", argProperty.color_code);
        $newPropertyBody.append('<p class="tile-text-right">' + argProperty.name + '</p>');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyFooter.append('<h4 class="tile-text-right">$' + argProperty.price + '</h4>');
        $newProperty.append($newPropertyTitle, $newPropertyBody, $newPropertyUpgrades, $newPropertyFooter);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addPropertyTop(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_Top_' + argPlace + '"></div>');
        var $newProperty = $("<div class='cardTop' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="cardTop-title"></div>');
        var $newPropertyBody = $('<div class="cardTop-body"></div>');
        var $newPropertyUpgrades = $('<div class="cardTop-upgrades"></div>');
        var $newPropertyFooter = $('<div class="cardTop-footer"></div>');

        $newPropertyTitle.css("background-color", argProperty.color_code);
        $newPropertyBody.append('<p class="tile-text-top">' + argProperty.name + '</p>');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyFooter.append('<h4 class="tile-text-top">$' + argProperty.price + '</h4>');
        $newProperty.append($newPropertyTitle, $newPropertyBody, $newPropertyUpgrades, $newPropertyFooter);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addPropertyBottom(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_Bottom_' + argPlace + '"></div>');
        var $newProperty = $("<div class='cardBottom' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="cardBottom-title"></div>');
        var $newPropertyBody = $('<div class="cardBottom-body"></div>');
        var $newPropertyUpgrades = $('<div class="cardBottom-upgrades"></div>');
        var $newPropertyFooter = $('<div class="cardBottom-footer"></div>');

        $newPropertyTitle.css("background-color", argProperty.color_code);
        $newPropertyBody.append('<p class="tile-text-bottom">' + argProperty.name + '</p>');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyUpgrades.append('<img src="./assets/img/house.jpg">');
        $newPropertyFooter.append('<p class="tile-text-bottom">$' + argProperty.price + '</p>');
        $newProperty.append($newPropertyTitle, $newPropertyBody, $newPropertyUpgrades, $newPropertyFooter);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addRailRoadLeft(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_left_' + argPlace + '"></div>');
        var $newProperty = $("<div class='railroad_left_container' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="railroad_left-title"></div>');
        var $newPropertyBody = $('<div class="railroad_left-body"></div>');

        var $newPropertyFooter = $('<div class="railroad_left-footer"></div>');

        $newPropertyTitle.append('<p class="tile-text-left">' + argProperty.name + '</p>');
        $newPropertyBody.append('<img src="./assets/img/train.jpg">');

        $newPropertyFooter.append('<p class="tile-text-left">$' + argProperty.price + '</p>');
        $newProperty.append($newPropertyTitle, $newPropertyBody, $newPropertyFooter);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addRailRoadRight(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_Right_' + argPlace + '"></div>');
        var $newProperty = $("<div class='railroad_Right_container' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="railroad_Right-title"></div>');
        var $newPropertyBody = $('<div class="railroad_Right-body"></div>');

        var $newPropertyFooter = $('<div class="railroad_right-footer"></div>');

        $newPropertyTitle.append('<p class="tile-text-right">' + argProperty.name + '</p>');
        $newPropertyBody.append('<img src="./assets/img/train.jpg">');

        $newPropertyFooter.append('<p class="tile-text-right">$' + argProperty.price + '</p>');
        $newProperty.append($newPropertyTitle, $newPropertyBody, $newPropertyFooter);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addCommunityChestLeft(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_left_' + argPlace + '"></div>');
        var $newProperty = $("<div class='communitychest_left_container' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="communitychest_left-title"></div>');
        var $newPropertyBody = $('<div class="communitychest_left-body"></div>');

        $newPropertyTitle.append('<p class="tile-text-left">' + argProperty.name + '</p>');
        $newPropertyBody.append('<img src="./assets/img/treasure.jpg">');
        $newProperty.append($newPropertyTitle, $newPropertyBody);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addIncomeTax() {
        var $Target = $('<div class="board_left_' + 4 + '"></div>');
        var $newProperty = $("<div class='tax_container' id='pos" + 4 + "'></div>");
        var $newPropertyTitle = $('<div class="tax-title"></div>');
        var $newPropertyBody = $('<div class="tax-body"></div>');

        var $newPropertyFooter = $('<div class="tax-footer"></div>');

        $newPropertyTitle.append('<p class="tile-text-left">Income Tax</p>');
        $newPropertyBody.append('<img src="./assets/img/dollar-sign-black.jpg" alt="" srcset="">');

        $newPropertyFooter.append('<p class="tile-text-left">Pay $200</p>');
        $newProperty.append($newPropertyTitle, $newPropertyBody, $newPropertyFooter);
        $Target.append($newProperty);
        $("#target").append($Target);
    }
    addChanceLeft() {

        var $Target = $('<div class="board_left_' + 7 + '"></div>');
        var $newProperty = $("<div class='chanceLeft_container' id='pos" + 7 + "'></div>");
        var $newPropertyTitle = $('<div class="chanceLeft-title"></div>');
        var $newPropertyBody = $('<div class="chanceLeft-body"></div>');



        $newPropertyTitle.append('<p class="tile-text-left">Chance</p>');
        $newPropertyBody.append('<img src="./assets/img/chance.jpg" alt="" srcset="">');


        $newProperty.append($newPropertyTitle, $newPropertyBody);
        $Target.append($newProperty);
        $("#target").append($Target);
    }
    addChanceRight() {

        var $Target = $('<div class="board_Right_' + 22 + '"></div>');
        var $newProperty = $("<div class='chanceRight_container' id='pos" + 22 + "'></div>");
        var $newPropertyTitle = $('<div class="chanceRight-title"></div>');
        var $newPropertyBody = $('<div class="chanceRight-body"></div>');



        $newPropertyTitle.append('<p class="tile-text-right">Chance</p>');
        $newPropertyBody.append('<img src="./assets/img/chance.jpg" alt="" srcset="">');


        $newProperty.append($newPropertyTitle, $newPropertyBody);
        $Target.append($newProperty);
        $("#target").append($Target);
    }
    addChanceBottom() {

        var $Target = $('<div class="board_Bottom_' + 36 + '"></div>');
        var $newProperty = $("<div class='chanceBottom_container' id='pos" + 36 + "'></div>");
        var $newPropertyTitle = $('<div class="chanceBottom-title"></div>');
        var $newPropertyBody = $('<div class="chanceBottom-body"></div>');



        $newPropertyTitle.append('<p class="tile-text-bottom">Chance</p>');
        $newPropertyBody.append('<img src="./assets/img/chance.jpg" alt="" srcset="">');


        $newProperty.append($newPropertyTitle, $newPropertyBody);
        $Target.append($newProperty);
        $("#target").append($Target);
    }
    addGo() {
        var $goTarget = $('<div class="board_1" id="pos0"></div>');
        var $goContainer = $('<div class="go_container"></div>');
        var $goTitle = $('<div class="go-title"></div>');
        var $goBody = $('<div class="go-body"></div');
        var $goText = $('<div class="go_text"></div');
        $goText.append('<br>', '<p class="tile-text">Collect</p>', '<p class="tile-text">$200 Salary</p>', '<p class="tile-text">as you PASS</p>', '<h1>GO</h1>')
        $goTitle.append($goText);
        $goContainer.append($goTitle);
        $goBody.append('<br>', '<img src="./assets/img/Monopoly_Go_Arrow.jpg" alt="">');
        $goContainer.append($goBody);
        $goTarget.append($goContainer);
        $('#target').append($goTarget);

    }

    addJail() {
        var $jailTarget = $('<div class="board_2" id="pos10"></div>');
        var $jailContainer = $('<div class="jail_container"></div>');
        var $jailTitle = $('<div class="jail-title"></div>');

        var $jailText = $('<div class="jail_text"></div');
        $jailText.append('<p class="tile-text">Jail</p>');
        $jailTitle.append($jailText);
        $jailTitle.append('<br>', '<img src="./assets/img/jail.jpg" alt="">');
        $jailContainer.append($jailTitle);
        $jailTarget.append($jailContainer);
        $('#target').append($jailTarget);
    }
    addElectricCompany() {
        var $elecTarget = $('<div class="board_12" id="pos12"></div>');
        var $elecContainer = $('<div class="utilitiesTop_container"></div>');
        var $elecTitle = $('<div class="utilitiesTop-title"></div>');
        var $elecBody = $('<div class="utilitiesTop-body"></div>');
        var $elecFooter = $('<div class="utilitiesTop-footer"></div>');

        $elecTitle.append('<p class="tile-text-top">Electric Company</p>');
        $elecBody.append('<img src="./assets/img/electric.jpg" alt="" srcset="">');
        $elecFooter.append('<p class="tile-text-top">$150</p>');

        $elecContainer.append($elecTitle, $elecBody, $elecFooter);
        $elecTarget.append($elecContainer);
        $('#target').append($elecTarget);

    }
    addWaterWorks() {
        var $WaterTarget = $('<div class="board_Right_28" id="pos28"></div>');
        var $WaterContainer = $('<div class="utilitiesRight_container"></div>');
        var $WaterTitle = $('<div class="utilitiesRight-title"></div>');
        var $WaterBody = $('<div class="utilitiesRight-body"></div>');
        var $WaterFooter = $('<div class="utilitiesRight-footer"></div>');

        $WaterTitle.append('<p class="tile-text-right">WaterWorks</p>');
        $WaterBody.append('<img src="./assets/img/waterworks.gif" alt="" srcset="">');
        $WaterFooter.append('<p class="tile-text-right">$150</p>');

        $WaterContainer.append($WaterTitle, $WaterBody, $WaterFooter);
        $WaterTarget.append($WaterContainer);
        $('#target').append($WaterTarget);

    }
    addRailRoadTop(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_Top_' + argPlace + '"></div>');
        var $newProperty = $("<div class='railroad_Top_container' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="railroad_Top-title"></div>');
        var $newPropertyBody = $('<div class="railroad_Top-body"></div>');

        var $newPropertyFooter = $('<div class="railroad_Top-footer"></div>');

        $newPropertyTitle.append('<p class="tile-text-top">' + argProperty.name + '</p>');
        $newPropertyBody.append('<img src="./assets/img/train.jpg">');

        $newPropertyFooter.append('<p class="tile-text-top">$' + argProperty.price + '</p>');
        $newProperty.append($newPropertyTitle, $newPropertyBody, $newPropertyFooter);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addRailRoadBottom(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_Bottom_' + argPlace + '"></div>');
        var $newProperty = $("<div class='railroad_Bottom_container' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="railroad_Bottom-title"></div>');
        var $newPropertyBody = $('<div class="railroad_Bottom-body"></div>');

        var $newPropertyFooter = $('<div class="railroad_Bottom-footer"></div>');

        $newPropertyTitle.append('<p class="tile-text-bottom">' + argProperty.name + '</p>');
        $newPropertyBody.append('<img src="./assets/img/train.jpg">');

        $newPropertyFooter.append('<p class="tile-text-bottom">$' + argProperty.price + '</p>');
        $newProperty.append($newPropertyTitle, $newPropertyBody, $newPropertyFooter);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addCommunityChestTop(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_Top_' + argPlace + '"></div>');
        var $newProperty = $("<div class='communitychest_Top_container' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="communitychest_Top-title"></div>');
        var $newPropertyBody = $('<div class="communitychest_Top-body"></div>');

        $newPropertyTitle.append('<p class="tile-text-top">' + argProperty.name + '</p>');
        $newPropertyBody.append('<img src="./assets/img/treasure.jpg">');
        $newProperty.append($newPropertyTitle, $newPropertyBody);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addCommunityChestBottom(argTarget, argPlace, argProperty) {
        var $Target = $('<div class="board_Bottom_' + argPlace + '"></div>');
        var $newProperty = $("<div class='communitychest_Bottom_container' id='pos" + argPlace + "'></div>");
        var $newPropertyTitle = $('<div class="communitychest_Bottom-title"></div>');
        var $newPropertyBody = $('<div class="communitychest_Bottom-body"></div>');

        $newPropertyTitle.append('<p class="tile-text-bottom">' + argProperty.name + '</p>');
        $newPropertyBody.append('<img src="./assets/img/treasure.jpg">');
        $newProperty.append($newPropertyTitle, $newPropertyBody);
        $Target.append($newProperty);
        $("#" + argTarget).append($Target);
    }
    addLuxury() {
        var $Target = $('<div class="board_Bottom_' + 38 + '"></div>');
        var $newProperty = $("<div class='luxury_container' id='pos" + 38 + "'></div>");
        var $newPropertyTitle = $('<div class="luxury-title"></div>');
        var $newPropertyBody = $('<div class="luxury-body"></div>');

        var $newPropertyFooter = $('<div class="luxury-footer"></div>');

        $newPropertyTitle.append('<p class="tile-text-bottom">Luxury Tax</p>');
        $newPropertyBody.append('<img src="./assets/img/diamond.jpg" alt="" srcset="">');

        $newPropertyFooter.append('<br><p class="tile-text-bottom">Pay $100</p>');
        $newProperty.append($newPropertyTitle, $newPropertyBody, $newPropertyFooter);
        $Target.append($newProperty);
        $("#target").append($Target);


    }
    addGoToJail() {
        var $boardLocation = $('<div class="board_4"></div>');
        var $Target = $('#target');
        var $container = $('<div class="gotojail_container" id="pos30"></div>');
        var $title = $('<div class="gotojail-title"></div>');
        var $titleText = $('<div class="gotojail_text"></div>');

        $titleText.append('<p class="tile-text">Go To</p>', '<p class="tile-text">Jail</p>');
        $title.append($titleText);
        $title.append('<br>', '<img src="http://www.tenancy.co.nz/wp-content/uploads/2017/05/Monopoly-Officer.png" alt="">');
        $container.append($title);
        $boardLocation.append($container);
        $Target.append($boardLocation);
    }
    addFrePark(){
        var $boardLocation = $('<div class="board_3"></div>');
        var $Target = $('#target');
        var $container = $('<div class="freepark_container" id="pos20"></div>');
        var $title = $('<div class="freepark-title"></div>');
        var $titleText = $('<div class="freepark_text"></div>');

        $titleText.append('<p class="tile-text">free park</p>');
        $title.append($titleText);
        $title.append('<br>','<img src="./assets/img/freepark.jpg" alt="">');
        $container.append($title);
        $boardLocation.append($container);
        $Target.append($boardLocation);
    }


}