document.addEventListener('DOMContentLoaded', function() {
    // ページロード時にローカルストレージからデータを取得してフォームに反映
    const age = localStorage.getItem('age');
    const weight = localStorage.getItem('weight');
    const height = localStorage.getItem('height');
    const gender = localStorage.getItem('gender');
    const smoking = localStorage.getItem('smoking');

    if (age) document.getElementById('age').value = age;
    if (weight) document.getElementById('weight').value = weight;
    if (height) document.getElementById('height').value = height;
    if (gender) document.querySelector(`input[name="gender"][value="${gender}"]`).checked = true;
    if (smoking) document.querySelector(`input[name="smoking"][value="${smoking}"]`).checked = true;
});

document.getElementById('health-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 入力データを取得
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const smoking = document.querySelector('input[name="smoking"]:checked').value;

    // ローカルストレージにデータを保存
    localStorage.setItem('age', age);
    localStorage.setItem('weight', weight);
    localStorage.setItem('height', height);
    localStorage.setItem('gender', gender);
    localStorage.setItem('smoking', smoking);

    // 結果を計算する既存の処理をここで呼び出す
    calculateResults(); // 必要に応じて適切な関数名を変更
});

document.getElementById('health-form').addEventListener('submit', function(event) {
    event.preventDefault();  // フォームのデフォルト動作（ページリロード）を無効にする

    // ユーザーが入力した情報を取得
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const smoking = document.querySelector('input[name="smoking"]:checked').value;

    // 身長をメートル単位に変換
    const heightInMeters = height / 100;

    // BMIを計算
    const bmi = weight / (heightInMeters * heightInMeters);

    // BMI評価のメッセージ
    let bmiMessage = `あなたのBMIは ${bmi.toFixed(2)} です。`;

    // BMIが正常範囲の場合のメッセージ
    if (bmi >= 18.5 && bmi < 25) {
        bmiMessage += " あなたの体重は正常です。あなたは十分な栄養と適切な運動により、活動的で健康的な生活を送っています。このままで健康を守りましょう。";
    } else if (bmi < 18.5) {
        bmiMessage += " あなたは体重が足りません。健康的な食事は健康的でエネルギッシュな生活を送るために不可欠です。";
    } else if (bmi >= 25 && bmi < 30) {
        bmiMessage += " あなたは肥満予備軍です。";
    } else if (bmi >= 30) {
        bmiMessage += " あなたは肥満です。あなたは健康と不健康の境界線にいます。今すぐ体重を減らすための対策を講じてください。そうすれば、新しい時代の病気である高血圧、糖尿病、がんのリスクを防ぐことができます。幸せで質の高い健康的な生活を目指して努力すれば、きっと成果が得られると思います。";
    }

    // 心血管疾患リスクの評価
    let cardioRiskMessage = "";
    let cardioRisk = 0;

    // 喫煙がある場合、心血管リスクが増加
    if (smoking === "はい") {
        cardioRisk += 10;  // 喫煙は心血管疾患のリスクを10%増加
        cardioRiskMessage += "喫煙は心血管疾患のリスクを大幅に高めます。";
    } else if (smoking === "いいえ") {
        // 喫煙しない場合、リスクが低下
        cardioRisk -= 10;  // 喫煙しないことによってリスクが10%低下
        cardioRiskMessage += "おめでとうございます！喫煙をしないことで、今後10年間に心血管疾患を発症するリスクが10%低下し、非常に低くなります。このままで健康を守りましょう。";
    }

    // 心血管疾患リスクに基づいたメッセージ
    if (cardioRisk > 0) {
        cardioRiskMessage += ` あなたの心血管疾患のリスクは約${cardioRisk}%です。`;
        if (age >= 40) {
            cardioRiskMessage += " (年齢が40歳を超えると心血管疾患のリスクが増加します。)";
        }
    } else {
        cardioRiskMessage = "心血管疾患のリスク:おめでとうございます！喫煙をしないことで、今後10年間に心血管疾患を発症するリスクが10%低下し、非常に低くなります。このままで健康を守りましょう。（ただし高BMI（30以上）は心血管疾患のリスクを増加させます。）";
    }

    // 結果をポップアップに表示
    document.getElementById('result').textContent = bmiMessage;
    document.getElementById('cardio-risk').innerHTML = cardioRiskMessage;

    // 画像の表示処理
    let imageSrc = "";
    if (bmi >= 30) {
        imageSrc = "obese.png";  // 肥満の画像
    } else if (bmi >= 25) {
        imageSrc = "overweight.png";  // 過体重の画像
    } else if (cardioRisk > 0) {
        imageSrc = "smoke.png";  // 喫煙リスクの画像
    } else {
        imageSrc = "healthy.png";  // 健康的な生活の画像
    }

    // 画像を表示
    const resultImage = document.getElementById('result-image');
    resultImage.src = imageSrc;
    resultImage.style.display = 'block';

    // ポップアップを表示
    document.getElementById('popup').style.display = 'flex';

    // 印刷ボタンの処理
    document.getElementById('print-results').addEventListener('click', function() {
        window.print();  // 印刷ダイアログを表示
    });

    // 閉じるボタンのイベント
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });
});
