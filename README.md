# Witryna Społecznościowa

Projekt "Witryna Społecznościowa" został stworzony na zaliczenie studiów na kierunku Programista Python Developer na Uniwersytecie WSB Merito. Jest to aplikacja internetowa oparta na frameworku Django, umożliwiająca użytkownikom interakcję poprzez dodawanie zdjęć wraz z opisem, polubienia, obserwowanie innych użytkowników oraz śledzenie ich aktywności.

**Autor:** Eryk Kurkowski

**Numer albumu:** 27089

**Kierunek:** Programista Python Developer

## Instalacja i Konfiguracja

Aby zainstalować i skonfigurować projekt, wykonaj następujące kroki: 

 1. **Sklonuj repozytorium:**
	 ```bash 
	 git clone https://github.com/Erickarius/witryna_spolecznosciowa.git
	 ```
 2.  **Przejdź do katalogu projektu:**
	 ```bash 
	 cd witryna_spolecznosciowa 
		```
 4. **Zainstaluj wymagane biblioteki przy pomocy menadżera pakietów pip:**
	```bash
	pip install -r requirements.txt
	```
 5. **Przeprowadź migracje bazy danych:**
	```bash
	python manage.py migrate 
	```
 6. **Uruchom serwer deweloperski Django:**
	```bash
	python manage.py runserver 
	```

## Funkcje

Po poprawnej instalacji i konfiguracji, projekt "Witryna Społecznościowa" oferuje następujące funkcje:

 - **Rejestracja i Logowanie:** Użytkownicy mogą zarejestrować się, tworząc
   nowe konto, lub zalogować się na istniejące konto.
 - **Edycja Profilu:** Po zalogowaniu użytkownicy mają możliwość edycji
   swojego profilu, w tym zmiany zdjęcia profilowego, imienia, nazwiska
   i daty urodzenia.
 - **Dodawanie Zdjęć:** Użytkownicy mogą dodawać nowe zdjęcia wraz z
   opisami.
 - **Interakcja z Zdjęciami:** Użytkownicy mogą polubić lub odlubić
   zdjęcia innych użytkowników.
 - **Obserwowanie Użytkowników:** Istnieje możliwość obserwowania innych
   użytkowników, aby śledzić ich aktywność i dodawane przez nich zdjęcia.

## Biblioteki

Projekt "Witryna Społecznościowa" wykorzystuje następujące biblioteki:

 - **Django:** Framework webowy oparty na języku Python, używany do budowy
   aplikacji internetowych.
 - **asgiref:** Moduł asynchroniczny w Django.
 - **certifi:** Zbiorcze repozytorium korzeni zaufanych certyfikatów SSL,
   wykorzystywane w komunikacji zabezpieczonej przez HTTPS.
 - **easy-thumbnails:** Biblioteka do generowania miniatur obrazków w
   Django.
 - **Pillow:** Biblioteka Python do manipulacji obrazami, wykorzystywana w
   Django do przetwarzania zdjęć.
 - **sqlparse:** Biblioteka do analizy i formatowania zapytań SQL w
   Pythonie.
 - **tzdata:** Dane strefy czasowej, używane w Django do obsługi różnych
   stref czasowych.

## Zrzuty ekranu:
![Widok Główny](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/d8596e2d-c550-4a9b-a5a7-b5526793b0c0)

![widok rejestracji](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/7d901e10-9fe4-4af1-b604-f233cba2d8c0)

![widok po utworzeniu konta](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/686f8647-02da-486c-a0a4-253da584e53c)

![widok panelu głównego](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/0086e25d-a6b1-434c-91d3-f0292be6e984)

![widok edycji konta](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/ff982936-b11e-4cc2-8fea-dceb97c812f6)

![widok zmiany hasła 2](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/d6596670-7479-48f9-bc17-e30312acfb59)

![widok profilu](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/2f6e95c0-2334-4973-b86c-3b9e7779e007)

![widok zakładki obrazy](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/92da6c84-aabb-415d-aa29-9076fc5ef30d)

![widok zakładki ludzie](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/0f4fe12a-17fb-4394-b10b-e7a6d24fe32c)

![widok dodawania zdjęć](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/eb3a2587-84e5-4de3-b1eb-632a82cb9f0d)

![Widok dodawania obrazów](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/49632c48-c602-4cce-b60d-5c68205dea94)

![widok dodanego zdjęcia](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/59ce59c1-0756-4dac-98c4-79e380689d29)

![Widok wylogowania](https://github.com/Erickarius/witryna_spolecznosciowa/assets/117024079/553ed08a-4db2-4377-b039-8fba8141b39b)



