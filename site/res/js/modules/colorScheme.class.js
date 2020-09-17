class ColorScheme {
	static brownColorScheme = new ColorScheme(0x7c7368, 0x594f45, 0xFFFFFF);
	static lightBlueColorScheme = new ColorScheme(0x589ffc, 0x83eefc, 0x000000);
	static greyColorScheme = new ColorScheme(0x454545, 0x666666, 0xFFFFFF);
	static orangeColorScheme = new ColorScheme(0xfc8f1b, 0xfcbe7b, 0xFFFFFF);

	static colorSchemes = {
		0: new ColorScheme(0x7c7368, 0x594f45, 0xFFFFFF),
		1: new ColorScheme(0x589ffc, 0x83eefc, 0x000000),
		2: new ColorScheme(0x454545, 0x666666, 0xFFFFFF),
		3: new ColorScheme(0xfc8f1b, 0xfcbe7b, 0xFFFFFF)
	};

	constructor(borderColor, backgroundColor, fontColor){
		this.borderColor = borderColor;
		this.backgroundColor = backgroundColor;
		this.fontColor = fontColor;
	}
}