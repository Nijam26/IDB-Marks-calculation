window.onload = function () {
    // Get elements
    var txt01 = document.getElementById("txt01");
    var txt02 = document.getElementById("txt02");
    var txt03 = document.getElementById("txt03");
    var txt04 = document.getElementById("txt04");
    var txt_total = document.getElementById("txt_total");
    var txt_status = document.getElementById("txt_status");
    var btn_Cal = document.getElementById("btn_Cal");
    var btn_clr = document.getElementById("btn_clr");
    var btn_exit = document.getElementById("btn_exit");

    // Set maximum lengths for inputs
    txt01.maxLength = 2;
    txt02.maxLength = 2;

    // Calculate Button
    btn_Cal.onclick = function () {
        var num1 = parseInt(txt01.value, 10);
        var num2 = parseInt(txt02.value, 10);

        // Validate Mid-Monthly Marks
        if (txt01.value === "" || isNaN(num1) || num1 < 0) {
            alert("Enter valid Mid-Monthly Marks between 0 and 50.");
            txt01.value = "";
            txt01.focus();
            return;
        } else if (num1 > 50) {
            alert("Maximum Mid-Monthly Marks is 50.");
            txt01.value = "";
            txt01.focus();
            return;
        }

        // Validate Monthly Marks
        if (txt02.value === "" || isNaN(num2) || num2 < 0) {
            alert("Enter valid Monthly Marks between 0 and 50.");
            txt02.value = "";
            txt02.focus();
            return;
        } else if (num2 > 50) {
            alert("Maximum Monthly Marks is 50.");
            txt02.value = "";
            txt02.focus();
            return;
        }

        // Calculate 20% of Mid-Monthly Marks
        var total1 = Math.round(num1 * 0.20 * 100) / 100;
        txt03.value = total1;

        // Calculate 80% of Monthly Marks
        var total2 = Math.round(num2 * 0.80 * 100) / 100;
        txt04.value = total2;

        // Calculate Total Marks
        var total = Math.round(num1 * 0.20 + num2 * 0.80);
        txt_total.value = total;

        // Determine Status
        if (total >= 30) {
            txt_status.value = "Passed";
        } else {
            txt_status.value = "Failed";
        }
    };

    // Clear Button
    btn_clr.onclick = function () {
        txt01.value = "";
        txt02.value = "";
        txt03.value = "";
        txt04.value = "";
        txt_total.value = "";
        txt_status.value = "";
        txt01.focus();
    };

    // Exit Button
    btn_exit.onclick = function () {
        if (confirm("Are you sure you want to exit?")) {
            // Try to close the window
            if (window.close) {
                window.close();
            } else {
                alert("Your browser prevents this page from closing automatically. Please close the tab manually.");
            }
        }
    };
};
