var locked = false;
var isHost = false;
var cardOpacity = 0.9;
var medalsPath = 'medals://';

var teamArray = [
    {name: 'red', color: '#620B0B'},
    {name: 'blue', color: '#0B2362'},
    {name: 'green', color: '#1F3602'},
    {name: 'orange', color: '#BC4D00'},
    {name: 'purple', color: '#1D1052'},
    {name: 'gold', color: '#A77708'},   
    {name: 'brown', color: '#1C0D02'}, 
    {name: 'pink', color: '#FF4D8A'}, 
    {name: 'white', color: '#D8D8D8'}, 
    {name: 'black', color: '#0B0B0B'}           
];

var weaponDetails = [
    {name:'Guardians', 'string':'GuardiansUnknown'},
    {name:'Guardians', 'string':'Guardians'},
    {name:'Falling Damage', 'string':'FallingDamage'},
    {name:'Generic Collision', 'string':'GenericCollision'},
    {name:'Armor Lock Crush', 'string':'ArmorLockCrush'},
    {name:'Generic Melee', 'string':'GenericMelee'},
    {name:'Generic Explosion', 'string':'GenericExplosion'},
    {name:'Magnum', 'string':'Magnum'},
    {name:'Plasma Pistol', 'string':'PlasmaPistol'},
    {name:'Needler', 'string':'Needler'},
    {name:'Mauler', 'string':'Mauler'},
    {name:'SMG', 'string':'SMG'},
    {name:'Plasma Rifle', 'string':'PlasmaRifle'},
    {name:'Battle Rifle', 'string':'BattleRifle'},
    {name:'Covenant Carbine', 'string':'CovenantCarbine'},
    {name:'Shotgun', 'string':'Shotgun'},
    {name:'Sniper Rifle', 'string':'SniperRifle'},
    {name:'Beam Rifle', 'string':'BeamRifle'},
    {name:'Assault Rifle', 'string':'AssaultRifle'},
    {name:'Spiker', 'string':'Spiker'},
    {name:'Fuel Rod Cannon', 'string':'FuelRodCannon'},
    {name:'Missile Pod', 'string':'MissilePod'},
    {name:'Rocket Launcher', 'string':'RocketLauncher'},
    {name:'Spartan Laser', 'string':'SpartanLaser'},
    {name:'Brute Shot', 'string':'BruteShot'},
    {name:'Flamethrower', 'string':'Flamethrower'},
    {name:'Sentinel Gun', 'string':'SentinelGun'},
    {name:'Energy Sword', 'string':'EnergySword'},
    {name:'Gravity Hammer', 'string':'GravityHammer'},
    {name:'Frag Grenade', 'string':'FragGrenade'},
    {name:'Plasma Grenade', 'string':'PlasmaGrenade'},
    {name:'Spike Grenade', 'string':'SpikeGrenade'},
    {name:'Firebomb Grenade', 'string':'FirebombGrenade'},
    {name:'Flag', 'string':'Flag'},
    {name:'Bomb', 'string':'Bomb'},
    {name:'Bomb Explosion', 'string':'BombExplosion'},
    {name:'Ball', 'string':'Ball'},
    {name:'Machinegun Turret', 'string':'MachinegunTurret'},
    {name:'Plasma Cannon', 'string':'PlasmaCannon'},
    {name:'Plasma Mortar', 'string':'PlasmaMortar'},
    {name:'Plasma Turret', 'string':'PlasmaTurret'},
    {name:'Shade Turret', 'string':'ShadeTurret'},
    {name:'Banshee', 'string':'Banshee'},
    {name:'Ghost', 'string':'Ghost'},
    {name:'Mongoose', 'string':'Mongoose'},
    {name:'Scorpion', 'string':'Scorpion'},
    {name:'Scorpion Gunner', 'string':'ScorpionGunner'},
    {name:'Spectre', 'string':'Spectre'},
    {name:'Spectre Gunner', 'string':'SpectreGunner'},
    {name:'Warthog', 'string':'Warthog'},
    {name:'Warthog Gunner', 'string':'WarthogGunner'},
    {name:'Warthog Gauss Turret', 'string':'WarthogGaussTurret'},
    {name:'Wraith', 'string':'Wraith'},
    {name:'Wraith Gunner', 'string':'WraithGunner'},
    {name:'Tank', 'string':'Tank'},
    {name:'Chopper', 'string':'Chopper'},
    {name:'Hornet', 'string':'Hornet'},
    {name:'Mantis', 'string':'Mantis'},
    {name:'Prowler', 'string':'Prowler'},
    {name:'Sentinel Beam', 'string':'SentinelBeam'},
    {name:'Sentinel RPG', 'string':'SentinelRPG'},
    {name:'Teleporter', 'string':'Teleporter'},
    {name:'Tripmine', 'string':'Tripmine'},
    {name:'DMR', 'string':'DMR'}
];

var medalDetails = [
    {name:'Unknown1', 'string':'Unknown1', 'desc':'Last Man Standing?'},
    {name:'Unknown4', 'string':'Unknown4', 'desc':'Flag Kill?'},
    {name:'Perfection!', 'string':'perfection', 'desc':'Win a Slayer game without dying with at least 15 kills.'},
    {name:'Extermination!', 'string':'extermination', 'desc':'Wipe out an enemy team with at least an overkill.'},
    {name:'Killing Spree!', 'string':'killing_spree', 'desc':'Kill 5 opponents in a row without dying.'},
    {name:'Killing Frenzy!', 'string':'killing_frenzy', 'desc':'Kill 10 opponents in a row without dying.'},
    {name:'Running Riot!', 'string':'running_riot', 'desc':'Kill 15 opponents in a row without dying.'},
    {name:'Rampage!', 'string':'rampage', 'desc':'Kill 20 opponents in a row without dying.'},
    {name:'Untouchable!', 'string':'untouchable', 'desc':'Kill 25 opponents in a row without dying.'},
    {name:'Invincible!', 'string':'invincible', 'desc':'Kill 30 opponents in a row without dying.'},
    {name:'Shotgun Spree!', 'string':'shotgun_spree', 'desc':'Kill 5 opponents in a row with the shotgun without dying.'},
    {name:'Sword Spree!', 'string':'sword_spree', 'desc':'Kill 5 opponents in a row with the Energy Sword without dying.'},
    {name:'Sniper Spree!', 'string':'sniper_spree', 'desc':'Kill 5 opponents in a row with a sniper weapon without dying.'},
    {name:'Splatter Spree!', 'string':'splatter_spree', 'desc':'Splatter 5 opponents in a row using a vehicle without dying.'},
    {name:'Open Season!', 'string':'open_season', 'desc':'Kill 10 opponents in a row with the shotgun without dying.'},
    {name:'Slice n Dice!', 'string':'slice_n_dice', 'desc':'Kill 10 opponents in a row with the Energy Sword without dying.'},
    {name:'Sharpshooter!', 'string':'sharpshooter', 'desc':'Kill 10 opponents in a row with a sniper weapon without dying.'},
    {name:'Vehicular Manslaughter!', 'string':'vehicular_manslaughter', 'desc':'Splatter 10 opponents in a row using a vehicle without dying.'},
    {name:'Double Kill!', 'string':'double_kill', 'desc':'Kill 2 opponents within 4 seconds of each other.'},
    {name:'Triple Kill!', 'string':'triple_kill', 'desc':'Kill 3 opponents within 4 seconds of each other.'},
    {name:'Overkill!', 'string':'overkill', 'desc':'Kill 4 opponents within 4 seconds of each other.'},
    {name:'Killtacular!', 'string':'killtacular', 'desc':'Kill 5 opponents within 4 seconds of each other.'},
    {name:'Killtrocity!', 'string':'killtrocity', 'desc':'Kill 6 opponents within 4 seconds of each other.'},
    {name:'Killimanjaro!', 'string':'killimanjaro', 'desc':'Kill 7 opponents within 4 seconds of each other.'},
    {name:'Killtastrophe!', 'string':'killtastrophe', 'desc':'Kill 8 opponents within 4 seconds of each other.'},
    {name:'Killpocalypse!', 'string':'killpocalypse', 'desc':'Kill 9 opponents within 4 seconds of each other.'},
    {name:'Killionaire!', 'string':'killionaire', 'desc':'Kill 10 opponents within 4 seconds of each other.'},
    {name:'Beat Down!', 'string':'beat_down', 'desc':'Hit and kill an opponent with a melee attack.'},
    {name:'Assassin!', 'string':'assassin', 'desc':'Hit and kill an opponent with a melee attack from behind.'},
    {name:'Sniper Kill!', 'string':'sniper_kill', 'desc':'Kill an opponent with a Sniper Rifle or the Beam Rifle.'},
    {name:'Grenade Stick!', 'string':'grenade_stick', 'desc':'Kill an opponent by sticking them with a sticky or brute grenade.'},
    {name:'Laser Kill!', 'string':'laser_kill', 'desc':'Kill an opponent by using the Spartan Laser.'},
    {name:'Oddball Kill!', 'string':'oddball_kill', 'desc':'Get a melee kill when holding the oddball.'},
    {name:'Flag Kill!', 'string':'flag_kill', 'desc':'Get a melee kill with the flag.'},
    {name:'Splatter!', 'string':'splatter', 'desc':'Hit and kill an opponent with your vehicle.'},
    {name:'Incineration!', 'string':'incineration', 'desc':'Kill an opponent with a flame-based weapon.'},
    {name:'Killjoy!', 'string':'killjoy', 'desc':'End an opponents killing spree.'},
    {name:'Death from the Grave!', 'string':'from_the_grave', 'desc':'Kill an opponent after you have died.'},
    {name:'Highjacker!', 'string':'hijacker', 'desc':'Board a land-based vehicle by forcibly removing the opponent in it.'},
    {name:'Bulltrue!', 'string':'bulltrue', 'desc':'Kill an opponent that is in the act of a sword lunge.'},
    {name:'Wheelman!', 'string':'wheelman', 'desc':'Be the driver of a vehicle when a passenger kills an opponent.'},
    {name:'Skyjacker!', 'string':'skyjacker', 'desc':'Board an aircraft by forcibly removing the opponent in it.'},
    {name:'Killed Flag Carrier!', 'string':'flag_carrier_kill', 'desc':'Kill the opponent flag carrier in CTF.'},
    {name:'Flag Score!', 'string':'flag_captured', 'desc':'Score the flag in CTF.'},
    {name:'Killed Juggernaut!', 'string':'juggernaut_kill', 'desc':'Kill the Juggernaut in a Juggernaut game.'},
    {name:'Killed VIP!', 'string':'vip_kill', 'desc':'Kill an opponents VIP in a VIP game.'},
    {name:'Killed Bomb Carrier!', 'string':'bomb_carrier_kill', 'desc':'Kill an opponent bomb carrier in Assault.'},
    {name:'Bomb Planted!', 'string':'bomb_planted', 'desc':'Plant the bomb in Assault.'},
    {name:'Last Man Standing!', 'string':'last_man_standing', 'desc':'Be the last human in an infection game.'},
    {name:'Hail to the King!', 'string':'hail_to_the_king', 'desc':'Kill 5 opponents in a row from inside the hill before it moves.'},
    {name:'Infection Spree! ', 'string':'infection_spree', 'desc':'Kill 5 humans in a row as the zombie without dying.'},
    {name:'Zombie Killing Spree!', 'string':'zombie_killing_spree', 'desc':'Kill 5 zombies in a row as the human without dying.'},
    {name:'Juggernaut Spree!', 'string':'juggernaut_spree', 'desc':'Kill 5 opponents in a row as the Juggernaut without dying.'},
    {name:'Mmmm Brains!', 'string':'mmm_brains', 'desc':'Kill 10 humans in a row as the zombie without dying.'},
    {name:'Hells Janitor!', 'string':'hells_janitor', 'desc':'Kill 10 zombies in a row as the human without dying.'},
    {name:'Unstoppable!', 'string':'unstoppable', 'desc':'Kill 10 opponents in a row as the Juggernaut without dying.'},
    {name:'Steaktacular!', 'string':'steaktacular', 'desc':'Luke owes you a steak dinner.'},
    {name:'Linktacular!', 'string':'linktacular', 'desc':'Play in a matchmade game comprised of all Bungie.net users.'},
    {name:'Killed Vehicle!', 'string':'vehicle_kill', 'desc':'Destroy an enemy vehicle.'},
    {name:'Headshot!', 'string':'headshot', 'desc':'Kill an enemy with a headshot.'}
];

$(window).load(function(){
    $(document).keydown(function(e){
        if((locked && e.keyCode == 9)||(locked && e.keyCode == 27)){
            dew.hide();
        } 
        if(e.keyCode == 84 || e.keyCode == 89){
            var teamChat = false;
            if(e.keyCode == 89){ teamChat = true };
            dew.show("chat", {'captureInput': true, 'teamChat': teamChat});
        }
        if(e.keyCode == 192 || e.keyCode == 112){
            dew.show("console");
        }
    });
    $.contextMenu({
        selector: '.clickable', 
        callback: function(key, options){
            switch(key){
                case "mute":
                    dew.command("VoIP.MutePlayer " + flipUID($(this).attr('data-uid')));
                    break;
                case "kick":
                    dew.command("Server.KickUid " + flipUID($(this).attr('data-uid')));
                    break;
                case "ban":
                    dew.command("Server.KickBanUid " + flipUID($(this).attr('data-uid')));
                    break;
                default:
                    console.log(key + " " + $(this).attr('data-name') + " " + $(this).attr('data-uid'));
            }
        },
        items: {
            "mute": {  name: "Mute" },
            "kick": {
                name: "Kick",                
                disabled: function(key, options){ 
                    return !isHost; 
                }
            },
            "ban": {
                name: "Ban",                
                disabled: function(key, options){
                    return !isHost; 
                }
            }
        }
    });
    displayScoreboard();
});

dew.command('Game.MedalPack', {}).then(function(response){
    medalsPath = medalsPath + response + "/";
});

dew.on("scoreboard", function(e){
    displayScoreboard();
});

dew.on("show", function(e){
    locked = e.data.locked;
    dew.captureInput(locked);
    if(locked){
        $('#closeButton').show();
    }else{
        $('#closeButton').hide();
    }
    if(e.data.postgame){
        $('#winnerText').show();
    }else{
        $('#winnerText').hide();
    }
});

function displayScoreboard(){
    dew.getSessionInfo().then(function(i){
        isHost = i.isHost;
    });
    dew.getScoreboard().then(function (e){ 
        $('#header').empty();
        //if(e.gameType=="slayer"){
            $('#header').append(
                '<th></th><th>Players</th><th>Kills</th><th>Deaths</th><th>Assists</th><th>Score</th>'
            );
        //}
        buildScoreboard(e.players, e.hasTeams, e.teamScores);
    });
    dew.command("Server.NameClient", { internal: true }).then(function (name){
        $("#serverName").text(name);
    });    
}

function buildScoreboard(lobby, teamGame, scoreArray){
    var tempArray = [];
    for(var i=0; i < scoreArray.length; i++){
        tempArray.push({name: teamArray[i].name, score: -999});
    }
    var where = '#scoreboard';
    if(lobby.length > 0){
        $('#scoreboard').empty();
        $('#window tbody').slice(1).remove();
        for(var i=0; i < lobby.length; i++){
            var bgColor = lobby[i].color;
            if(teamGame){
                bgColor = teamArray[lobby[i].team].color;
                where = '#'+teamArray[lobby[i].team].name;
                if($(where).length == 0){
                    $('#window table').append('<tbody id="'+teamArray[lobby[i].team].name+'"><tr class="player teamHeader" style="background-color:'+hexToRgb(teamArray[lobby[i].team].color, cardOpacity)+';"><td></td><td>'+teamArray[lobby[i].team].name.toUpperCase()+' TEAM</td><td></td><td></td><td></td><td></td></tr></tbody>');    
                }        
                $(where+' td:eq(2)').text(parseInt($(where+' td:eq(2)').text() || 0)+lobby[i].kills); //kills
                $(where+' td:eq(3)').text(parseInt($(where+' td:eq(3)').text() || 0)+lobby[i].deaths); //deaths
                $(where+' td:eq(4)').text(parseInt($(where+' td:eq(4)').text() || 0)+lobby[i].assists); //assists  
                $(where+' td:eq(5)').text(parseInt($(where+' td:eq(5)').text() || 0)+lobby[i].score); //score                  
                tempArray[tempArray.findIndex(x => x.name == teamArray[lobby[i].team].name)].score = $(where+' td:eq(5)').text();              
                sortScoreboard(tempArray, teamGame, 'teams');
            }
            $(where).append(
                $('<tr>', {
                    css: {
                        backgroundColor: hexToRgb(bgColor,cardOpacity)
                    },
                    id: lobby[i].name,
                    class: 'player clickable',
                    'data-uid': lobby[i].UID,
                    'data-color': bgColor,
                }).click(function(){
                    var playerName = $(this).attr('id');
                    playerBreakdown(playerName);
                }).mouseover(function(){
                    col = $(this).attr('data-color'),
                    bright = adjustColor(col, 30);
                    $(this).css("background-color", hexToRgb(bright, cardOpacity));
                }).mouseout(function(){
                    col = $(this).attr('data-color');
                    $(this).css("background-color", hexToRgb(col, cardOpacity));
                })
                .append($('<td>'))
                .append($('<td>').text(lobby[i].name)) //name
                .append($('<td>').text(lobby[i].kills)) //kills
                .append($('<td>').text(lobby[i].deaths)) //deaths
                .append($('<td>').text(lobby[i].assists)) //assists
                .append($('<td>').text(lobby[i].score)) //score
            );                     
        }      
        sortScoreboard(lobby, teamGame, 'players');  
    }  
}

function hexToRgb(hex, opacity){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + opacity + ")";
}

function sortScoreboard(list, teamGame, sortWhat){
    list.sort(function(b, a){
        return parseFloat(a.score) - parseFloat(b.score);
    });
    if(list.length > 1){
        if(list[0].score == list[1].score){
            $('#winnerText').text('Tie!');
        }else{
            if(teamGame){
                $('#winnerText').text(list[0].name.substr(0,1).toUpperCase() + list[0].name.substr(1)+' Team wins!');
            }else{
                $('#winnerText').text(list[0].name+' wins!');           
            }
        }
    }
    var lastScore = list[0].score;
    var x = 1;
    for (i = 0; i < list.length; i++){ 
        if((teamGame && sortWhat == 'teams')||(!teamGame && sortWhat == 'players')){
            if(list[i].score != lastScore){x+=1;}
            $('#'+list[i].name+' td:eq(0)').text(x);
            lastScore = list[i].score;
        }
        if(teamGame && sortWhat =='players'){
            where = '#'+teamArray[list[i].team].name;
        }else if(!teamGame && sortWhat =='players'){
            where = '#scoreboard';
        }else{
            where = '#window table';
        } 
        $(where).append($('#'+list[i].name));     
    }
}

function playerBreakdown(name){
    dew.command('Server.ListPlayersJSON').then(function(res){
        var lobby = JSON.parse(res);
        var playerIndex = lobby.findIndex(x => x.name == name)
        var color = hexToRgb(lobby[playerIndex].color, 0.9);
        
        if(playerIndex==0){
            $('#previousPlayer').prop("disabled",true);
        }else{
            $('#previousPlayer').prop("disabled",false);      
            $('#previousPlayer').on('click', function(){
                playerBreakdown(lobby[playerIndex-1].name); 
            });            
        }
        if(playerIndex==(lobby.length-1)){
            $('#nextPlayer').prop("disabled",true);
        }else{
            $('#nextPlayer').prop("disabled",false);   
            $('#nextPlayer').on('click', function(){ 
                playerBreakdown(lobby[playerIndex+1].name); 
            });            
        }

        dew.getStats(name).then(function (stats){
            console.log(stats);
            $('#playerBreakdown').show();
            $('#playerName').text(name);  
            $('#playerName').css({'background-color': color});  
            
            var weaponArray = $.map(stats.weapons, function(value, index){
                var tempArray = {'Weapon': index};
                for (var prop in value){
                tempArray[prop] = value[prop];
                }
                return tempArray;
            });
            
            var kills = 0;
            var deaths = 0;
            var suicides = 0;
            var headshots = 0;
            $.each( weaponArray, function( index, value ){
                kills += value.Kills;
                deaths += value.KilledBy;
                suicides += value.SuicidesWith;
                headshots += value.HeadshotsWith;
            });
            
            $('#playerKills').text("Kills: "+kills);  
            $('#playerDeaths').text("Deaths: "+deaths);
            $('#playerKDSpread').text("K/D Spread: "+(kills-deaths));
            $('#playerSuicides').text("Suicides: "+suicides);
        
            weaponArray.sort(function(b, a){
                return parseFloat(a.Kills) - parseFloat(b.Kills);
            });
            $('#toolOfDestruction tbody').empty();
            if(weaponArray[0].Kills!=0){
                $('#toolOfDestruction tbody').append(
                    $('<tr>')
                    .append($('<td>').text(weaponDetails[weaponDetails.findIndex(x => x.string == weaponArray[0].Weapon)].name))
                    .append($('<td>').text("Kills: "+weaponArray[0].Kills))
                );
            }else{
                $('#toolOfDestruction tbody').append("<tr><td>None</td></tr>"); 
            } 
            
            $('#killedMost').hide();
            $('#killedMost tbody').empty();
            var playerKilledArray = stats.playerkilledplayer;
            if(playerKilledArray.length > 0){
                $('#killedMost').show();
                playerKilledArray.sort(function(b, a){
                    return parseFloat(a.Kills) - parseFloat(b.Kills);
                }); 
                var enemyIndex = lobby.findIndex(x => x.name == playerKilledArray[0].PlayerName);
                var bgColor = "#C0C0C0";
                if(enemyIndex > -1){ bgColor = lobby[enemyIndex].color; };
                $('#killedMost tbody').append(
                    $('<tr>', {
                        class: 'player', 
                        id: playerKilledArray[0].PlayerName,
                        css: {
                            backgroundColor: hexToRgb(bgColor, 0.9)
                        }
                    }).click(function(){
                        playerBreakdown($(this).attr('id'));
                    })
                    .append($('<td>').text(playerKilledArray[0].PlayerName)) //name
                    .append($('<td>').text(playerKilledArray[0].Kills)) //kills
                );
            }    		

            $('#killedMostBy').hide();          
            $('#killedMostBy tbody').empty();
            var killedByArray = stats.playerkilledby;	
            if(killedByArray.length > 0){		
                $('#killedMostBy').show(); 			
                killedByArray.sort(function(b, a){
                    return parseFloat(a.Kills) - parseFloat(b.Kills);
                }); 
                var enemyIndex = lobby.findIndex(x => x.name == killedByArray[0].PlayerName);
                var bgColor = "#C0C0C0";
                if(enemyIndex > -1){ bgColor = lobby[enemyIndex].color; };
                $('#killedMostBy tbody').append(
                    $('<tr>', {
                        class: 'player', 
                        id: killedByArray[0].PlayerName,
                        css: {
                            backgroundColor: hexToRgb(bgColor, 0.9)
                        }
                    }).click(function(){
                        playerBreakdown($(this).attr('id'));
                    })
                    .append($('<td>').text(killedByArray[0].PlayerName)) //name
                    .append($('<td>').text(killedByArray[0].Kills)) //kills
                );
            }

            var medalArray = $.map(stats.medals, function(value, index){
                return {'name':index, 'count':value};
            });
                    
            medalArray.sort(function(b, a){
                return parseFloat(a.count) - parseFloat(b.count);
            }); 
            
            if(medalArray[0].count!=0){
                $('#bigMedal').css("background-image","url("+ medalsPath + "images/" + medalArray[0].name +".svg)");    
                $('.medalName').text(medalDetails[medalDetails.findIndex(x => x.string == medalArray[0].name)].name);
                $('.medalDesc').text(medalDetails[medalDetails.findIndex(x => x.string == medalArray[0].name)].desc);
            }else{
                $('#bigMedal').css("background-image","none");    
                $('.medalName').text(null);
                $('.medalDesc').text(null);
            }
            $('#medalBox').empty();
            for(i=0;i<10;i++){
                if(medalArray[i].count!=0){
                    $('#medalBox').append(
                        $('<div>', {
                            class: 'medal',
                            id: medalArray[i].name,
                            css: {
                                'background-image': "url("+ medalsPath + "images/" + medalArray[i].name +".svg)"
                            },
                            html: "<span class='medalCount'>x "+medalArray[i].count+"</span>"
                        }).mouseover(function(){
                            $('#bigMedal').css("background-image","url("+ medalsPath + "images/" + $(this).attr('id') +".svg)");
                            $('.medalName').text(medalDetails[medalDetails.findIndex(x => x.string == $(this).attr('id'))].name);
                            $('.medalDesc').text(medalDetails[medalDetails.findIndex(x => x.string == $(this).attr('id'))].desc);
                        })
                    );
                }
            }
            var fillerCount = 10 - $('#medalBox').children().length;
            for(i=0;i<fillerCount;i++){
                $('#medalBox').append('<div class="medal">');
            }
        })
    }); 
}

function adjustColor(color, amount){
    var colorhex = (color.split("#")[1]).match(/.{2}/g);
    for (var i = 0; i < 3; i++){
        var e = parseInt(colorhex[i], 16);
        e += amount;
        if(amount > 0){
            colorhex[i] = ((e > 255) ? 255 : e).toString(16);
        }else{
            colorhex[i] = ((e < 0) ? 0 : e).toString(16);           
        }
    }
    return "#" + colorhex[0] + colorhex[1] + colorhex[2];
}


function flipUID(uid){
    var bits = uid.match(/.{1,2}/g);
    var newUID = "";
    for (var i = 0; i < bits.length; i++){
        newUID = bits[i] + newUID;
    }
    return newUID;
}