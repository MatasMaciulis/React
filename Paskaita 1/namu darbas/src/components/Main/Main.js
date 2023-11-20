import React from "react";
import styles from "./Main.module.css";
import Image from "../Image/Image";

export default function Main() {
  return (

    <main className={styles.main}>

      <section className={styles.intro}>
        <h1>Sveiki atvykę į mūsų svetainę!</h1>
        <p>Čia rasite naujausius produktus ir paslaugas.</p>
      </section>

      <section className= {styles.products}>
        <h2>Populiarūs produktai</h2>
        <ul>
          <li>Produktas 1</li>
          <li>Produktas 2</li>
          <li>Produktas 3</li>
        </ul>
      </section>

      <section className={styles.aboutUs}>
        <h2>Apie mus</h2>
        <p>
          Mūsų įmonė užsiima aukštos kokybės produktų gamyba jau daugelį metų.
        </p>
      </section>

      <section className={styles.contact}>
        <h2>Kontaktai</h2>
        <address>
          <p>El. paštas: info@example.com</p>
          <p>Telefono numeris: +1 123-456-7890</p>
        </address>
      </section>


      <div className={styles.photoGallery}>
      <h1> Photo gallery</h1>
      <p>tai mano foto galerija : </p>
      </div>

      <div className={styles.container}>
        
        <Image
          imgAprasymas={"statybininkas"}
          imgSaltinis={"https://img.freepik.com/free-photo/positive-bearded-guy-posing-against-white-wall_273609-20609.jpg?w=1800&t=st=1697062277~exp=1697062877~hmac=2b9e9d517dbb1b39500dadf93e04e16fae86fc8a6069ed32cf5ad99f69d9558c"}
        />

        <Image
          imgAprasymas={"moteris kita"}
          imgSaltinis={"https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg"}
        />

        <Image
          imgAprasymas={"statybininkas"}
          imgSaltinis={"https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1380&t=st=1697062250~exp=1697062850~hmac=6311035b0db3fb380077dc892060e838ff946c6d728217a6cb6ee6b25735c000"}
        />

        <Image
          imgAprasymas={"moteris"}
          imgSaltinis={"https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg"}
        />

        <Image
          imgAprasymas={"statybioras"}
          imgSaltinis={"https://media.istockphoto.com/id/1306498283/photo/confident-mature-caucasian-engineer-in-hardhat-with-clipboard-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=Mbi_VMaX7n3_j9OHny9jblA-q2w0xeibwbEazoGjYrw="}
        />

        <Image
          imgAprasymas={"moteris"}
          imgSaltinis={"https://img.freepik.com/premium-photo/young-african-american-curly-hair-woman-showing-timeout-gesture_1187-57335.jpg"}
        />

      </div>

    </main>
  );
}
