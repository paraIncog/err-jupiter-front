# ERR Jupiteri Frontend Programm ![Angular](https://img.shields.io/badge/--%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

## Tehnoloogiad kasutuses:
* Angular veebiraamistik
* Angular Material (https://material.angular.dev/)
* Docker (https://www.docker.com/)
* Programeerimiskeskkonnana kasutati Visual Studio Code'i (https://code.visualstudio.com/)

### Juhised kasutamiseks

#### ![Docker](https://img.shields.io/badge/--%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) Kasutamine Dockeri kaudu

1. Avage Integreeritud programmeerimiskeskkond (IDE)

2. Avage programm läbi versioonihalduse vajutades nupule `Clone Git Repository` ja siis sisestage koodi aadress `https://github.com/paraIncog/err-jupiter-front.git`

3. Laadige alla ja käivitage [Docker Desktop](https://www.docker.com/products/docker-desktop/)

4. Pärast Dockeri käivitamist sisestage IDE konsoolis
```bash
docker build -t err-jupiter-frontend .
docker run -d -p 8888:80 --name jupiter-frontend err-jupiter-frontend
```

5. Võtke lahti veebilehitseja (brauser) aadressil [localhost:8888](localhost:8888)

*!Pärast Kasutust!*

Lõpetage Dockeri konteineri tegevus kasutades
```bash
docker stop jupiter-frontend
```
ja siis
```bash
docker rm jupiter-frontend
```
konteineri eemaldamiseks.

Lõpuks
```bash
docker system prune -af
```
ülejäänu tekitatud süsteemi prügi kustutamiseks.

#### Otsene allalaadimine ja kohalik kasutus

1. Laadige alla kogu kood ZIP failina ja paki lahti Teile sobivas asukohas vajutades teise alternatiiv hiirevajutusega nupul `Extract all..` ja siis `Extract`

2. Avage lahtipakitud fail Integreeritud programmeerimiskeskkonnas (IDEs)

3. [IDE Konsoolis] Sisestage käsund 
```bash
npm install
```
et masin laeks alla programmi toimimiseks vajalikud komponendid

4.

- A [IDEs] Vajutage käivitamiseks IDEsse sisseehitatud nupp, kus saab käivitada programmi konsooli abita - tavaliselt on selleks 'play' nupp

- B [Konsoolis] Sisestage programmis käivitamiseks käsund
```bash
npm start
```

5. Võtke lahti veebilehitseja (brauser) aadressil [localhost:4200](localhost:4200)

*!Pärast kasutust!*

Kinni panemiseks sulge IDE aken, või siis IDE terminalis vajutada klahvikombinatsioonil `CTRL + C` ja kinnita vajutades `y`

## Video programmi alla laadimisest ja kasutamisest

[YT video](https://www.youtube.com/watch?v=69KhLfRsX1E)

## Autor

### Andreas Selge
[LinkedIn](https://www.linkedin.com/in/selgeandreas)
