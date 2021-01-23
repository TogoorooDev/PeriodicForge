class ColorScheme {
	static brownColorScheme = new ColorScheme(0x7c7368, 0x594f45, 0xFFFFFF);
	static lightBlueColorScheme = new ColorScheme(0x589ffc, 0x83eefc, 0x000000);
	static greyColorScheme = new ColorScheme(0x454545, 0x666666, 0xFFFFFF);
	static orangeColorScheme = new ColorScheme(0xfc8f1b, 0xfcbe7b, 0xFFFFFF);
	static lightGreenColorScheme = new ColorScheme(0x12aa75, 0x10d38f, 0xFFFFFF);
	static redColorScheme = new ColorScheme(0xad423c, 0xdd564f, 0xFFFFFF);
	static purpleColorScheme = new ColorScheme(0xac53b2, 0xce66d6, 0xFFFFFF);
	static blueColorScheme = new ColorScheme(0x34349b, 0x4646ce, 0xFFFFFF)

	static colorSchemes = {
		0: this.brownColorScheme, // Brown
		1: this.lightBlueColorScheme, // Light Blue
		2: this.greyColorScheme, // Grey
		3: this.orangeColorScheme, // Orange
		4: this.lightGreenColorScheme, // Light Green
		5: this.redColorScheme, // Red
		6: this.purpleColorScheme, // Purple
		7: this.blueColorScheme, // Blue
	};

	constructor(borderColor, backgroundColor, fontColor){
		this.borderColor = borderColor;
		this.backgroundColor = backgroundColor;
		this.fontColor = fontColor;
	}
}