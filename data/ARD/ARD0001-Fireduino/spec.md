Fireduino Spec table copied from web site 2016-11-03
----------------------------------------------------

Soc: Rockchip NanoD ( 55nm HKMG Process )
CPU: ARM® Cortex™-M3 Dual-Core ( SystemCore Max 250MHz , CalculateCore Max 500MHz )
Codec: High quality Audio Codec and Decoder
• 192K/24bit audio codec with earphone driver
• H/W accelerator for lossless audio decoding, include APE/FLAC/OGG
• H/W accelerator for MP3 decoding
RAM	
Total of 1MByte SRAM：
• 320K IRAM and 256K DRAM for system core
• 128K IRAM and 256K DRAM for calculate core
• 64K always on SRAM
Memory	
8M Byte SPI Flash（Use to store firmware and user data）
16K Byte boot ROM
TF Card Slot
Wireless	Onboard AP6181 2.4GHz WiFi Module, Support IEEE802.11b/g/n protocol
Audio	
Provide a variety of audio interface:
1 x Analog audio (via 3.5mm Audio Jack for audio ouput)
2 x LINE-IN (via 3.5mm Audio Jack for audio input)
1 x LINE-OUT (via 3.5mm Audio Jack for audio ouput)
1 x On-board Micphone for audio input
Audio playback support:
Support MP3, WMA, APE, FLAC, AAC, OGG, AC3, WAV decoding
Support DLNA wireless audio protocol
RTC	OnBoard HYM8563 RTC Chip
LCD	Built-In i8080 MCU interface, Support max output resolution 400X400 LCD
LED	2 x Programmable LED ， 1 x Power Status LED
Button	1 x Reset Button，1 x Power Button，1 x Upgrade Button
Debugging	1 x Serial Console，for debugging
Reserved Interface	
50 Pins header：
I2C、SPI、I8080、UART、ADC、GPIO
Power	
5V~12V (recommended), Max Limit 30V (via DC 5.5*2.1mm Jack)
5V (via MicroUSB Jack)

Appearance	
Szie: 108.8 x 53.4mm
Weight: 37g

Software	
Programming Software: Support Arduino IDE、FireBlock graphics programming
API	
Digital I/O
Advanced I/O
Wire
Spi
RTC
TF
Analog I/O
Interrupts
Servo
TFT
Audio
WiFi
Programming languages support: C、C++
