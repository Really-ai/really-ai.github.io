function print(text1) {
  alert(text1);
  //type
  //return
  //to skip the rest of a function
}
//document.getElementById('date').value = "July 18, 15"
function openWebsite() {
  input_date = document.getElementById("date").value;
  input_date_array = input_date.replace(",", "").split(" ");
  l1 = input_date_array.length;
  date_obj = new Date(input_date);

  html_link1 = "";
  if ((l1 = 3)) {
    html_link1 = `https://horoscopes.astro-seek.com/calculate-birth-chart-horoscope-online/?input_natal=1&send_calculation=1&narozeni_den=${date_obj.getDate()}&narozeni_mesic=${
      date_obj.getMonth() + 1
    }&narozeni_rok=${
      input_date_array[2]
    }&narozeni_hodina=00&narozeni_minuta=00&narozeni_sekunda=00&narozeni_no_cas=on&narozeni_city=Manila%2C+Philippines&narozeni_mesto_hidden=Manila&narozeni_stat_hidden=PH&narozeni_podstat_kratky_hidden=&narozeni_podstat_hidden=Metro+Manila&narozeni_input_hidden=&narozeni_podstat2_kratky_hidden=&narozeni_podstat3_kratky_hidden=&narozeni_sirka_stupne=14&narozeni_sirka_minuty=36&narozeni_sirka_smer=0&narozeni_delka_stupne=120&narozeni_delka_minuty=59&narozeni_delka_smer=0&narozeni_timezone_form=auto&narozeni_timezone_dst_form=auto&house_system=placidus&hid_fortune=1&hid_fortune_check=on&hid_vertex=1&hid_vertex_check=on&hid_chiron=1&hid_chiron_check=on&hid_lilith=1&hid_lilith_check=on&hid_uzel=1&hid_uzel_check=on&tolerance=1&aya=&tolerance_paral=1.2#tabs_redraw`;
  }
  if ((l1 = 5)) {
    html_link1 = `https://horoscopes.astro-seek.com/calculate-birth-chart-horoscope-online/?input_natal=1&send_calculation=1&narozeni_den=${date_obj.getDate()}&narozeni_mesic=${
      date_obj.getMonth() + 1
    }&narozeni_rok=${
      input_date_array[2]
    }&narozeni_hodina=${date_obj.getHours()}&narozeni_minuta=${date_obj.getMinutes()}&narozeni_sekunda=00&narozeni_city=Manila%2C+Philippines&narozeni_mesto_hidden=Manila&narozeni_stat_hidden=PH&narozeni_podstat_kratky_hidden=&narozeni_podstat_hidden=Metro+Manila&narozeni_input_hidden=Cebu+City%2C+Philippines&narozeni_podstat2_kratky_hidden=&narozeni_podstat3_kratky_hidden=&narozeni_sirka_stupne=14&narozeni_sirka_minuty=36&narozeni_sirka_smer=0&narozeni_delka_stupne=120&narozeni_delka_minuty=59&narozeni_delka_smer=0&narozeni_timezone_form=auto&narozeni_timezone_dst_form=auto&house_system=whole&hid_fortune=1&hid_fortune_check=on&hid_vertex=1&hid_vertex_check=on&hid_chiron=1&hid_chiron_check=on&hid_lilith=1&hid_lilith_check=on&hid_uzel=1&hid_uzel_check=on&tolerance=1&aya=&tolerance_paral=1.2#tabs_redraw`;
  }
  window.open(html_link1);
}

function openTransits() {
  window.open(
    "https://horoscopes.astro-seek.com/transit-chart-planetary-transits"
  );
}
$(document).ready(function () {
  var toc = $("#toc");
  $("h2, h3, h4, h5, h6").each(function (i, heading) {
    $(this).html('<a href="#toc">' + $(this).html() + "</a>");
    var level = $(heading).get(0).tagName.substring(1); // Get heading level (H2, H3, etc.)
    var anchor = $(heading).attr("id") || "toc-link-" + i; // Create anchor if missing
    $(heading).attr("id", anchor); // Set anchor ID for linking

    toc.append(
      $('<li class="toc-level-' + level + '">').append(
        $("<a>")
          .text($(heading).text())
          .attr("href", "#" + anchor)
      )
    );
  });
});

function randomNumberInRange(min, max) {
  const range = max - min + 1;
  const randomValue = Math.random() * range;
  return Math.floor(randomValue) + min;
}

$(document).ready(function () {
  $("#generateButton").click(function () {
    const min = 1;
    const max = parseInt($("#maxNumber").val());
    yturl = $("#ytURL").val();
    const randomNum = randomNumberInRange(min, max);
    site = yturl.split("?");
    data = site[1].split("&");
    if (randomNum != 1) {
      data[0] = "v=l";
      data[2] = "index=" + (randomNum - 1);
    }
    window.open(`${site[0]}?${data[0]}&${data[1]}&${data[2]}`);
  });
});
