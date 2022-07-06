      
var btn = document.getElementById('button')

btn.onclick = () => {
    var input = Number(document.getElementById('input').value);
    var month = Number(document.getElementById('select').value);
    var percent = Number(document.getElementById('select-percent').value);

    if (month==3) {
        
        var price_of_percent =(input*percent)/100;
        var whole_Price = Number(input + price_of_percent);
        var price_of_month = whole_Price/month;

        document.getElementById('price').innerHTML=whole_Price;
        document.getElementById ('month_pay').innerHTML=price_of_month.toFixed();

    }else if (month==6) {
        var price_of_percent =(input*percent)/100;
        var whole_Price = Number(input + price_of_percent);
        var price_of_month = whole_Price/month;

        document.getElementById('price').innerHTML=whole_Price;
        document.getElementById ('month_pay').innerHTML=price_of_month.toFixed();

    }else if (month==12) {
        var price_of_percent =(input*percent)/100;
        var whole_Price = Number(input + price_of_percent);
        var price_of_month = whole_Price/month;

        document.getElementById('price').innerHTML=whole_Price;
        document.getElementById ('month_pay').innerHTML=price_of_month.toFixed();

    }else if (month==14) {
        var price_of_percent =(input*percent)/100;
        var whole_Price = Number(input + price_of_percent);
        var price_of_month = whole_Price/month;

        document.getElementById('price').innerHTML=whole_Price;
        document.getElementById ('month_pay').innerHTML=price_of_month.toFixed();

    }else if (month==16) {
        var price_of_percent =(input*percent)/100;
        var whole_Price = Number(input + price_of_percent);
        var price_of_month = whole_Price/month;

        document.getElementById('price').innerHTML=whole_Price;
        document.getElementById ('month_pay').innerHTML=price_of_month.toFixed();


    }else if (month==18) {
        var price_of_percent =(input*percent)/100;
        var whole_Price = Number(input + price_of_percent);
        var price_of_month = whole_Price/month;

        document.getElementById('price').innerHTML=whole_Price;
        document.getElementById ('month_pay').innerHTML=price_of_month.toFixed();
    }
}
