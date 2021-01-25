input = "00:00";

h = input.substring(0, 2);
h = parseInt(h);

m = input.substring(3, 5);

XM = " AM";


if (12 <= h && h <= 23) {
	XM = " PM";
	h = h - 12;
}
else if (h == 0) {
	h = 12;
}

console.log(h + ":" + m + XM);