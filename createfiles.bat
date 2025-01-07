@echo off
echo Creating the directory structure for banking application...
echo.

:: Create backend directories
mkdir backend
mkdir backend\config
mkdir backend\controllers
mkdir backend\models
mkdir backend\routes
mkdir backend\services

:: Create frontend directories
mkdir frontend
mkdir frontend\src
mkdir frontend\src\app
mkdir frontend\src\app\components
mkdir frontend\src\app\services
mkdir frontend\src\app\models
mkdir frontend\src\assets
mkdir frontend\src\environments

:: Create common directories and files
echo Creating common files...
::mkdir .git
::echo LICENSE > LICENSE
::echo README.md > README.md
::echo .gitignore > .gitignore
echo application.properties > backend\application.properties
echo .env > backend\.env
echo docker-compose.yml > docker-compose.yml

:: Create backend blank files
echo Creating backend blank files...
echo. > backend\config\database.config.js
echo. > backend\controllers\customer.controller.js
echo. > backend\models\customer.model.js
echo. > backend\routes\customer.routes.js
echo. > backend\services\customer.service.js
echo. > backend\app.js
echo. > backend\server.js

:: Create frontend blank files
echo Creating frontend blank files...
echo. > frontend\src\app\services\customer.service.ts
echo. > frontend\src\app\models\customer.model.ts
echo. > frontend\src\app\components\customer-form\customer-form.component.ts
echo. > frontend\src\app\components\account-details\account-details.component.ts
echo. > frontend\src\app\components\transaction-form\transaction-form.component.ts
echo. > frontend\src\app\app.module.ts
echo. > frontend\src\index.html
echo. > frontend\src\styles.css

:: End of Script
echo Directory structure and blank files created successfully!
pause
