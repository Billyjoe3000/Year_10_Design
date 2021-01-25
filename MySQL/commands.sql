INSERT INTO cats ( name, owner, birth) VALUES
	( 'Sandy', 'Lennon', '2015-01-03' ),
	( 'Cookie', 'Casey', '2013-11-13' ),
	( 'Charlie', 'River', '2016-05-21' );

SELECT name FROM cats WHERE owner = 'Casey';

DELETE FROM cats WHERE name = 'Cookie';