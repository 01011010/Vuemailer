<template>
  <!-- Section -->
  <section>
    <header><h2>Szolgáltatásaink</h2></header>
    <div class="content">
      <p>
        <strong
          >A mai világban már szinte minden cég számára nélkülözhetetlen az
          interneten való megjelenés.</strong
        >
        A kiélezett versenyben elengedhetetlenül fontos a jól átgondolt, és
        profin kivitelezett webes jelenlét megfizethető áron.
      </p>
      <p>
        Számunkra az ügyfelek elégedettsége a legfontosabb, ezért a felmerülő
        problémák megoldásában állunk rendelkezésére. Ha megakadt a technikával
        vívott "harcban", ránk mindig számíthat.
      </p>
      <ul class="feature-icons">
        <li>
          <font-awesome-icon :icon="['fas', 'laptop']" class="pos" />Mobil,
          tablet és kiosk alkalmazások
        </li>
        <li>
          <font-awesome-icon
            :icon="['fas', 'satellite-dish']"
            class="pos"
          />Online bankkártyás fizetés, előfizetés
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'users']" class="pos" />
          Ügyfélkapcsolati rendszerek, email kampányok
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'newspaper']" class="pos" />
          Kiadványszerkeztés, prospektusok, reklámanyagok
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'code']" class="pos" />
          Wordpress és egyéb rendszerek karbantartása
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'cogs']" class="pos" /> Hoszting,
          email és teljes körü szolgáltatások
        </li>
      </ul>
      <p>
        Amennyiben meglévő oldalához (Shopify, Wix, Wordpress, stb.) szeretne
        segítséget, vagy csak nincs ideje, kedve a fenntartással foglalkozni,
        akkor ezt is nyugodtan ránkbízthatja.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.pos {
  display: block;
  position: absolute;
  left: 1em;
  top: 1em;
  text-align: center;
}
.feature-icons > li::before {
  content: "";
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512'%3E%3Cpath d='M256,0l221.7,128v256L256,512L34.3,384V128L256,0z' fill='rgba(144, 144, 144, 0.1)' /%3E%3C/svg%3E");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  color: #000;
  display: block;
  font-size: 1.25rem;
  height: 3.25rem;
  left: 0;
  line-height: 3.25rem;
  position: absolute;
  text-align: center;
  top: 0;
  width: 3.25rem;
}
</style>
