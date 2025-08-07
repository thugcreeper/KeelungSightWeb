function fetchSightData(district) {
  let hint = document.getElementById('searchingHint'); // Show searching hint
  if(hint) hint.style.display = 'block';
  //return fetch(`http://127.0.0.1:8080/SightAPI?zone=${district}`, { method: "GET" })測試用本地端API
  return fetch(`https://keelungsightweb.onrender.com/SightAPI?zone=${district}`, { method: "GET" })//部署用
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      if(hint)hint.style.display = 'none'; // Hide searching hint
      return response.json();
    })
    .catch(error => {
      window.alert('Error fetching data: ' + error.message);
      hint.innerHTML='搜尋失敗!';
    });

}
export default fetchSightData;
