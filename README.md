# Brief set up steps (from a windows users POF):
1. Install PHP7 and make sure it is saved in your PATH 
2. Install SQLITE3 and make sure it is saved in your PATH
4. Search for a php.ini file (there should be two versions, production and development)
5. In both files, under the list of extensions, make sure you have "extension=php_sqlite3" uncommented. If not there, add it to the list. 
6. In both files, under the [sqlite3] section, specify the path of the directory that has sqlite.dll
7. Clone repository.
8. To set up youe SQLITE3 database, type in "cat load.sql | sqlite3 test.db"
9. To run, type in "php -S localhost:8000" where 8000 is a unused port of your choice.

---
To set the type of canvas, set a value for the canvas query string in the URL.

e.g. ```index.html?canvas=healthcare```
