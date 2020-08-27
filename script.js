            let generateDisplay = document.getElementById('generate_display');
            let calcDisplay = document.getElementById('calc_display');

            // GENERATE PIN BUTTON HANDLER
            function pinGenerate() {
                let generatePin = Math.random() * 9000 + 1000;
                generatePin = Math.floor(generatePin);
                generateDisplay.value = generatePin;
            };

            // SUBMIT BUTTON HANDLER
            let misMatchedCount = 0;
            function isMatched() {
                let generatePin = generateDisplay.value;
                let displayPin = calcDisplay.value;
                if (displayPin == '' || generatePin == '') {
                    return;
                } else if (generatePin === displayPin) {
                    displayStyle('matched', 'block');
                    displayStyle('mis_matched', 'none');
                    displayValue('generate_display');
                    displayValue('calc_display');
                } else {
                    displayStyle('matched', 'none');
                    displayStyle('mis_matched', 'block');
                    misMatchedCount++;
                    tryLeft();
                };
            };

            // ALL FUNCTION
            function insert(num) {
                calcDisplay.value += num;
            };

            function backSpace() {
                let num = calcDisplay.value;
                calcDisplay.value = num.substring(0, num.length - 1);
            };

            function clean() {
                displayValue('calc_display');
            };

            function disableBtn(button) {
                document.getElementById(button).style.backgroundColor = '#425062';
                document.getElementById(button).setAttribute("disabled", "");
            };

            function displayStyle(target, value) {
                document.getElementById(target).style.display = value;
            };

            function displayValue(display) {
                document.getElementById(display).value = '';
            };

            function reminderNote(note) {
                document.getElementById('action_left').innerText = note;
            };

            //REMINDER NOTIFICATION
            function tryLeft() {

                switch (misMatchedCount) {
                    case 1:
                        reminderNote('2 try left');
                        break;
                    case 2:
                        reminderNote('1 try left');
                        break;
                    case 3:
                        reminderNote('0 try left');
                        break;
                    default:
                        reminderNote('Sorry, you are not eligible');
                        disableBtn('submit_btn');
                        disableBtn('generate_btn');
                        displayStyle('mis_matched', 'none');
                        displayValue('generate_display');
                        displayValue('calc_display');
                        break;
                };
            };