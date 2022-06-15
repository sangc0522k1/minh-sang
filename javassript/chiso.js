function kiem_tra() {
    let can_nang = document.getElementById("can_nang").value;
    let chieu_cao = document.getElementById("chieu_cao").value;
    let bmi = can_nang / (chieu_cao * chieu_cao)
    let result = "";
    
    if (bmi < 16) 
        result = "Gầy độ 3. Ăn nhiều vào"
    else if (bmi < 17)
        result = "Gầy độ 2"
    else if (bmi < 18.5)
        result = "Gầy độ 1"
    else if (bmi < 25)
        result = "Bình thường"
    else if (bmi < 30)
        result = "Thừa cân"
    else if (bmi < 35)
        result = "Béo phì 1" 
    else if (bmi < 40)
        result = "Béo phì 2" 
    else
        result = "Béo phì 3. giảm cân nhé bạn" 

    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ result + "</b>";
}
