# Projeto de Scraping

## Descrição
Este projeto é um scraper de dados desenvolvido com TypeScript, Node.js, Express e JSDOM. O objetivo do projeto é coletar informações de partidas esportivas de um site específico e retornar esses dados em um formato estruturado.

# LiveBetBot API Documentatação 


1. **Clone the repository:**

```bash
git clone https://github.com/DevEduardoSouza/MapQuest.git
```

2. **Navigate to the backend directory:**

```bash
cd LiveBetBot
```


3. **Install dependencies:**

```bash
  npm install
````

4. **Start the server:**

```bash
  npm run start:dev
````

## Endpoints

### 1. Get Products by Keyword

Retrieves products from Amazon based on a keyword.

- **URL**: `/api/odds`
- **Method**: `GET`
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: 
    ```json
     {
    		"competitionName": "Série A Sub-20",
    		"timeMatch": "00:00",
    		"teams": {
    			"home": {
    				"name": "Bahia Sub-20",
    				"score": "0",
    				"odds": "5.50"
    			},
    			"away": {
    				"name": "Palmeiras Sub-20",
    				"score": "0",
    				"odds": "1.50"
    			},
    			"drawOdds": "3.90"
    		}
    	}
    ```
- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**: 
    ```json
    {
      "error": "error"
    }
    ```

## How to Use


GET http://localhost:3000/api/odds


