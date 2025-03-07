<?php include "./template/navbar.php" ?>
<main>
    <div class="title">
        <h1>Repoussez vos limites !</h1>
    </div>
    <section class="illustration">
        <article class="img">
            <img src="./images/woman.jpg" alt="Femme">
        </article>
        <article class="img" style="width: 60%;">
            <img src="./images/man.jpg" alt="Homme">
        </article>
        <article class="img" style="width: 50%;">
            <img src=" ./images/woman2.jpg" alt="Femme">
        </article>
        <div class="buttons-container">
            <a href="#"><button class="btn-orange">Découvrez les formules</a></button>
            <a href="#"><button class="btn-black">Réserver un cours</a></button>
        </div>
    </section>
    <section class="about">
        <img src="./images/dos.jpg" alt="">
        <div class="container-about">
            <h2>PulseFit</h2>
            <p>Nous t'accompagnons dans ta transformation physique et ton bien-être en te fournissant des conseils adaptés, des programmes d'entraînement efficaces et des astuces nutritionnelles.</p>
            <a href="#">Savoir plus</a>
        </div>
    </section>
    <section class="coachs">
        <h2>Nos coachs</h2>
        <div class="container-coachs">
            <div class="dr"></div>
            <article class="coach">
                <figure>
                    <img src="./images/laura.jpg" alt="Coach Laura">
                    <figcaption>
                        <h3>Laura</h3>
                        <span class="work">(CrossFit)</span>
                        <p>Laura vous accompagne dans des entraînements intenses et variés, alliant force, endurance et explosivité.</p>
                    </figcaption>
                </figure>
            </article>
            <article class="coach">
                <figure>
                    <img src="./images/maxime.jpg" alt="Coach Maxime">
                    <figcaption>
                        <h3>Maxime</h3>
                        <span class="work">(Perte de poids)</span>
                        <p>Maxime est spécialisé dans l'accompagnement des personnels souhaitant perdre du poids et retrouver leur forme.</p>
                    </figcaption>
                </figure>
            </article>
            <article class="coach">
                <figure>
                    <img src="./images/amandine.jpg" alt="Coach Amandine">
                    <figcaption>
                        <h3>Amandine</h3>
                        <span class="work">(Cardio-Training)</span>
                        <p>Amandine vous aide a améliorer votre endurance et brûler des graisses avec des séances de cardio dynamiques.</p>
                    </figcaption>
                </figure>
            </article>
            <article class="coach">
                <figure>
                    <img src="./images/pierre.jpg" alt="Coach Pierre">
                    <figcaption>
                        <h3>Pierre</h3>
                        <span class="work">(Musculation)</span>
                        <p>Pierre est un expert en musculation et vous aide à développer votre force et votre masse musculaire.</p>
                    </figcaption>
                </figure>
            </article>
        </div>
    </section>
    <section class="services">
        <h2>Nos services</h2>
        <div class="container-services">
            <article class="cours">
                <figure>
                    <img src="./images/crossfit.jpg" alt="crossfit">
                    <figcaption>
                        <h4>Crossfit</h4>
                        <p>50 min - 45€</p>
                        <a href="#">Réserver</a>
                    </figcaption>
                </figure>
            </article>
            <article class="cours">
                <figure>
                    <img src="./images/cardio.jpg" alt="crossfit">
                    <figcaption>
                        <h4>Perte de poids</h4>
                        <p>60 min - 65€</p>
                        <a href="#">Réserver</a>
                    </figcaption>
                </figure>
            </article>
            <article class="cours">
                <figure>
                    <img src="./images/endurance.jpg" alt="crossfit">
                    <figcaption>
                        <h4>Cardio-Training</h4>
                        <p>45 min - 70€</p>
                        <a href="#">Réserver</a>
                    </figcaption>
                </figure>
            </article>
            <article class="cours">
                <figure>
                    <img src="./images/muscu.jpg" alt="crossfit">
                    <figcaption>
                        <h4>Musculation</h4>
                        <p>90 min - 110€</p>
                        <a href="#">Réserver</a>
                    </figcaption>
                </figure>
            </article>
        </div>
    </section>
    <div class="contact">
        <h2>Contactez-nous</h2>
        <div class="container-global">
            <div class="container-left-form">
                <h3>Contact</h3>
                <p>Notre équipe est là pour répondre à toutes vos questions. Nous nous engageons à vous apporter une réponse dans un délai maximum de 48 heures.</p>
                <ul>
                    <li><span class="gras">Adresse :</span> 15 rue du château 75001 Paris, France</li>
                    <li><span class="gras">E-mail :</span> info@pulsefit.fr</li>
                    <li><span class="gras">Tél :</span> 01 23 45 67 89</li>
                </ul>
            </div>
            <div class="container-contact">
                <form action="" class="form-contact">
                    <div class="container-prenom">
                        <label for="Prénom"></label>
                        <input type="text" id="prenom" placeholder="Prénom">
                        <label for="Nom"></label>
                        <input type="text" id="nom" placeholder="Nom">
                    </div>
                    <div class="container-email">
                        <label for="email"></label>
                        <input type="email" id="mail" placeholder="Email">

                        <label for="objet"></label>
                        <input type="text" id="objet" placeholder="Objet">
                    </div>
                    <div class="container-message">
                        <label for="message"></label>
                        <textarea name="message" id="message" placeholder="Écrivez-votre message ici..."></textarea>
                    </div>
                    <button type="submit" class="envoyer">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
</main>
<?php include "./template/footer.php" ?>