# ERR Jupiteri Frontend Programm

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Tehnoloogiad kasutuses:
* Angular veebiraamistik
* Angular Material (https://material.angular.dev/)

### Juhised kasutamiseks

Kui soovite kasutada kohalikult, siis lugege neid juhiseid:

#### Otsene allalaadimine ja kohalik kasutus

1. Laadige alla kogu kood ZIP failina ja paki lahti Teile sobivas asukohas vajutades teise alternatiiv hiirevajutusega nupul `Extract all..` ja siis `Extract`

2. Avage lahtipakitud fail Integreeritud programmeerimiskeskkonnas (IDEs)

3. [IDE Konsoolis] Sisestage käsund `npm install`, et masin laeks alla programmi toimimiseks vajalikud komponendid

4.

-	A [IDEs] Vajutage käivitamiseks IDEsse sisseehitatud nupp, kus saab käivitada programmi konsooli abita - tavaliselt on selleks 'play' nupp

-	B [Konsoolis] Sisestage programmis käivitamiseks käsund `npm start`

5. Võtke lahti veebilehitseja (brauser) aadressil [localhost:4200](localhost:4200)

#### Kasutamine läbi Dockeri

1. Laadige alla kogu kood ZIP failina ja paki lahti Teile sobivas asukohas vajutades teise alternatiiv hiirevajutusega nupul `Extract all..` ja siis `Extract`

2. Avage lahtipakitud fail Integreeritud programmeerimiskeskkonnas (IDEs)

3. Laadige alla ja käivitage [Docker Desktop](https://www.docker.com/products/docker-desktop/)

4. Pärast Dockeri käivitamist sisestage IDE konsoolis `docker build -t err-jupiter-frontend .` ja siis `docker run -d -p 8888:80 --name jupiter-frontend err-jupiter-frontend`

5. Võtke lahti veebilehitseja (brauser) aadressil [localhost:8888](localhost:8888)

**Pärast Kasutust**

Lõpetage Dockeri konteineri tegevus kasutades `docker stop jupiter-frontend`, ja siis `docker rm jupiter-frontend` konteineri eemaldamiseks. Lõpuks `docker system prune -af` ülejäänu tekitatud süsteemi prügi kustutamiseks.

## Autorid

### Andreas Selge
[LinkedIn](https://www.linkedin.com/in/selgeandreas)
<p>Käesoleva programmi ja välimuse kujundaja ning arendaja</p>

### Eesti Rahvusringhääling
[Jupiteri leht](https://jupiter.err.ee/video)</p>
<p>Esmane välimus ja inspiratsiooni allikas</p>
