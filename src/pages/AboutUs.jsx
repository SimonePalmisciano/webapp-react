function AboutPage() {
  return (
    <div style={{ backgroundColor: "#f3e7c9", minHeight: "100vh" }}>
      {/* Sezione iniziale */}
      <section
        className="py-5 text-light"
        style={{
          background: "linear-gradient(135deg, #1f5a36, #163d26)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8">
              <h1 className="display-4 fw-bold mb-3">About Us</h1>
              <p className="lead mb-3">
                Jurassic Pork è una hamburgheria preistorica dove ogni piatto
                viene presentato come una scoperta archeologica a base di carne.
              </p>
              <p className="mb-0">
                Il nostro obiettivo è creare un posto diverso dal solito, con
                uno stile divertente, ispirato ai dinosauri, ma con panini veri,
                grandi e pieni di gusto.
              </p>
            </div>

            <div className="col-12 col-lg-4 mt-4 mt-lg-0">
              <div
                className="p-4 rounded-4 shadow"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <h4 className="fw-bold mb-3">Chi siamo</h4>
                <p className="mb-2">
                  <strong>Nome:</strong> Jurassic Pork
                </p>
                <p className="mb-2">
                  <strong>Stile:</strong> preistorico, simpatico e originale
                </p>
                <p className="mb-0">
                  <strong>Motto:</strong> Grrrreat Fast Food!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storia del negozio */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body p-4">
                  <h2 className="h3 fw-bold mb-3" style={{ color: "#163d26" }}>
                    La storia del negozio
                  </h2>
                  <p>
                    Jurassic Pork nasce dall’idea di unire il mondo dei
                    dinosauri con quello dei burger. Volevamo creare un locale
                    che fosse facile da ricordare, con un nome forte e uno stile
                    particolare.
                  </p>
                  <p className="mb-0">
                    L’idea è quella di trasformare un semplice panino in qualcosa
                    di più divertente, quasi come se fosse un reperto raro da
                    scoprire e provare.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div
                className="card h-100 shadow-sm border-0 rounded-4"
                style={{ backgroundColor: "#d8c29a" }}
              >
                <div className="card-body p-4">
                  <h2 className="h3 fw-bold mb-3" style={{ color: "#3b2415" }}>
                    La nostra idea
                  </h2>
                  <p>
                    Non volevamo fare una hamburgheria uguale alle altre. Per
                    questo abbiamo pensato a un tema giurassico, con colori
                    verdi, nomi particolari e una presentazione più creativa dei
                    prodotti.
                  </p>
                  <p className="mb-0">
                    Il locale deve essere un posto accogliente, originale e
                    divertente, ma sempre con attenzione alla qualità del cibo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panini e menu */}
      <section className="py-5" style={{ backgroundColor: "#efe1bd" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#163d26" }}>
              I nostri panini e i nostri menu
            </h2>
            <p className="text-muted">
              Ogni prodotto è pensato per avere un nome forte, uno stile
              riconoscibile e ingredienti che lo rendono speciale.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3" style={{ color: "#3b2415" }}>
                    Panini giganti
                  </h4>
                  <p className="mb-0">
                    I nostri burger sono il centro del menu: grandi, pieni di
                    ingredienti e pensati per colpire già dal nome e
                    dall’aspetto.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3" style={{ color: "#3b2415" }}>
                    Menu completi
                  </h4>
                  <p className="mb-0">
                    Oltre ai singoli panini, vogliamo proporre menu con patatine
                    e bibita, così da offrire un’esperienza completa e semplice
                    da scegliere.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3" style={{ color: "#3b2415" }}>
                    Specialità del locale
                  </h4>
                  <p className="mb-0">
                    L’idea è anche quella di aggiungere panini speciali o menu a
                    tempo limitato, per rendere il negozio più dinamico e
                    interessante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parte finale */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <h2 className="fw-bold mb-3" style={{ color: "#163d26" }}>
                Perché Jurassic Pork
              </h2>
              <p>
                Jurassic Pork non vuole essere solo un posto dove mangiare, ma
                anche un piccolo brand con una sua identità precisa. Il tema dei
                dinosauri rende il negozio più originale e più facile da
                ricordare.
              </p>
              <p className="mb-0">
                Con i nostri panini, i nostri menu e lo stile del locale,
                vogliamo dare ai clienti qualcosa di diverso dal solito fast
                food.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div
                className="p-4 rounded-4 shadow text-light"
                style={{ backgroundColor: "#163d26" }}
              >
                <h4 className="fw-bold mb-3">I nostri punti forti</h4>
                <ul className="mb-0">
                  <li className="mb-2">Tema originale e riconoscibile</li>
                  <li className="mb-2">Panini con nomi creativi</li>
                  <li className="mb-2">Menu semplici ma d’impatto</li>
                  <li>Atmosfera divertente e diversa dal solito</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;