document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('open-modal-button'); // フォームの送信ボタン
    const modal = document.getElementById('modal-dialog'); // モーダル全体
    const closeBtn = document.querySelector('.close-modal'); // モーダルの閉じるボタン
    const backBtn = document.getElementById('back-button'); // モーダルの戻るボタン
    const sendMailBtn = document.getElementById('send-mail-button'); // モーダル内の送信ボタン
    const form = document.getElementById('contactForm'); // フォーム全体
    const modalContentArea = document.getElementById('modal-content-area'); // モーダル内容表示エリア
    const overlay = document.querySelector('.overlay'); // オーバーレイ
  
    // フォームの入力内容を取得してモーダルに表示する関数
    const showModalContent = () => {
      const mail = form.querySelector('[name="mail"]').value;
      const sei = form.querySelector('[name="sei"]').value;
      const mei = form.querySelector('[name="mei"]').value;
      const gender = form.querySelector('[name="gender"]:checked') ? form.querySelector('[name="gender"]:checked').value : '未選択';
      const content = form.querySelector('[name="content"]').value;
  
      modalContentArea.innerHTML = `
        <p>メールアドレス: ${mail}</p>
        <p>氏名: ${sei} ${mei}</p>
        <p>性別: ${gender}</p>
        <p>問い合わせ内容: ${content}</p>
      `;
    };
  
    // モーダルを開く処理
    const openModal = () => {
      modal.classList.add('visible');
      overlay.classList.add('visible');
    };
  
    // モーダルを閉じる処理
    const closeModal = () => {
      modal.classList.remove('visible');
      overlay.classList.remove('visible');
    };
  
    // フォームの送信ボタン（モーダルを開くボタン）をクリックした時
    openModalBtn.addEventListener('click', (event) => {
      event.preventDefault(); // デフォルトのフォーム送信をキャンセル
      showModalContent(); // 入力内容をモーダルに表示
      openModal(); // モーダルを開く
    });
  
    // モーダルを閉じるボタン、戻るボタン、オーバーレイをクリックした時
    closeBtn.addEventListener('click', closeModal);
    backBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
  
    // モーダル内の「送信」ボタンをクリックした時
    sendMailBtn.addEventListener('click', () => {
      form.submit(); // フォームを送信
    });
  });