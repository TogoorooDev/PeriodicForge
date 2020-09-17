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
		0: new ColorScheme(0x7c7368, 0x594f45, 0xFFFFFF), //Brown
		1: new ColorScheme(0x589ffc, 0x83eefc, 0x000000), // Light Blue
		2: new ColorScheme(0x454545, 0x666666, 0xFFFFFF), // Grey
		3: new ColorScheme(0xfc8f1b, 0xfcbe7b, 0xFFFFFF), // Orange
		4: new ColorScheme(0x12aa75, 0x10d38f, 0xFFFFFF), // Light Green
		5: new ColorScheme(0xad423c, 0xdd564f, 0xFFFFFF), // Red
		6: new ColorScheme(0xac53b2, 0xce66d6, 0xFFFFFF), // Purple
		7: new ColorScheme(0x34349b, 0x4646ce, 0xFFFFFF), //Blue
	};

	constructor(borderColor, backgroundColor, fontColor){
		this.borderColor = borderColor;
		this.backgroundColor = backgroundColor;
		this.fontColor = fontColor;
	}
}