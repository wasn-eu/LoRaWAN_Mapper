# <img src="https://github.com/raystream/CubeCell_Getting_Started/raw/master/images/wasn_logo.png" width=150> LoRaWAN - Mapper
# (c) by <img src="https://github.com/raystream/CubeCell_Getting_Started/raw/master/images/wasn_logo.png" width=70>


GPS Mapping with the Panasonic Toughbook CF-U1 integrated GPS and a CubeCell Board.

All Data (Position and return data from ack sending) are saved to a csv or xml file.
Data could be directly visualized with an integrated google maps viewer.
Position Data are send to TTN and TTNMapper.

# Connecting the device

If you have bought the LoRaWAN-Mapper directly from WASN.eu ([buy](https://www.wasn.eu/p/wasn-lorawan-mapper)),
just connect the dongle with an USB cable to your PC.

If you like to build the dongle by your self, you need a CubeCell dev board and a NEO6M GPS board.
Wire them together:  

  | CubeCell Pin | GPS Pin |
  |--------------|---------|
  | TX           | TX      |
  | RX           | RX      |
  | GND          | GND     |
  | 3.3V         | 3.3V    |

# Using the software

- Download the software [here]() and start it.
<p align="center">
<img src="https://github.com/raystream/LoRaWAN_Mapper/raw/master/images/software.png" width=500>  
</p>
- open the config tab
 - select the authentification type you would like to use (OTAA/ABP)
 - copy all EUIs and Keys to the field in the OTAA and/or ABP groupbox
 - choose the right COM port for your dongle
 - set the timeoffset of your local timezone
 - choose if you would like to transmit a package every X seconds automatically
 - click on save
- open the  Mapping tab
 - click connect (you should see Data from the CubeCell and GPS in the debug views)
 - if OTAA was choosen the LoRaWAN display in the upper right will change to green if the join was successfull
 - if the GPS has a fix the GPS display in the upper right will change to green
 - press send to transmit a package
  - when the ackknowledge package was received the data will show up in the table and on the map
- you can save the data in a csv or xml file by pressing the "Save XML"or "Save CSV" button