 type="text/javascript"


        window.onload = function () {

            var stage = document.getElementById('stage');
            var ctx = stage.getContext("2d");
            document.addEventListener("keydown", keyPush)
            setInterval(game, 90); //ELE DEFINE UM INTERVALO PARA UMA FUNÇAO SER CHAMANDA VARIAS VEZES NO INTERVALO QUE NOS DEFINIR

            const vel = 1; // VELOCIDADE QUE ANDA A COBRA 

            var vx = vy = 0;
            var px = py = 10; // AONDE COMEÇA A COBRA 
            var tp = 20; // TAMANHO DE CADA QUADRADO 
            var qp = 20; // QUANTIDADE DE QUADRADOS 
            var ax = ay = 15;// PONTO AONDE COMEÇA A NOSSA MAÇA

            var trail = []; // RASTRO DA MINHA COBRINHA 
            tail = 5;


            function game() {

                px += vx;
                py += vy;        // FAZENDO A COBRA AO PASSAR DO ULTIMO PONTO PASSAR PARA O OUTRO LADO 
                if (px < 0) {
                    px = qp - 1;
                }
                if (px > qp - 1) {
                    px = 0;
                }
                if (py < 0) {
                    py = qp - 1;
                }
                if (py > qp - 1) {
                    py = 0;
                }


                ctx.fillStyle = "#7EA871"; // DEFININDO O ESTILO DE PREENCHIMENTO DO MEU CONTEXT
                ctx.fillRect(0, 0, stage.width, stage.height); // COMANDO DE PINTAR O PALCO, ESTA COMECANDO DO PONTO 0,0 E VAI PINTAR DE VERDE. 

                ctx.fillStyle = "red"; // DEFININDO A COR DA MAÇA
                ctx.fillRect(ax * tp, ay * tp, tp, tp);

                ctx.fillStyle = "#954FB2";  // DEFININDO A COR DA MINHA COBRINHA 
                for (let i = 0; i < trail.length; i++) {
                    ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);
                    if (trail[i].x == px && trail[i].y == py) {  
                        vx = vy = 0;
                        tail = 5;
                    } // DEFININDO SE QUANDO A CABEÇA BATER EM ALGUMA PARTE DO CORPO PARA DE ANDAR 
                }

                trail.push({ x: px, y: py }) // USANDO .PUSH ESTOU COLOCANDO ELEMENTO NO ULTIMO LUGAR DO ARRAY
                while (trail.length > tail) {
                    trail.shift();
                }

                if (ax == px && ay == py) {
                    tail++;
                    ax = Math.floor(Math.random() * qp); // REPOCISIONANDO NOSSA MAÇA 
                    ay = Math.floor(Math.random() * qp);
                } // AUMENTANDO A NOSSA CALDA 

            }

            function keyPush(event) { // MOVIMENTO DA NOSSA COBRA 
                switch (event.keyCode) {
                    case 37://  BOTAO ESQUERDA
                        vx = -vel;
                        vy = 0;
                        break;
                    case 38: // BOTAO CIMA
                        vx = 0;
                        vy = -vel;

                        break;
                    case 39: //  BOTAO DIREITA 
                        vx = vel;
                        vy = 0;
                        break;

                    case 40: // BOTAO BAIXO
                        vx = 0;
                        vy = vel;
                        break;

                    default:
                        break;
                }
            }
        }
    