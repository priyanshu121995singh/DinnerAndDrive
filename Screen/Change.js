import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import imagePath from './Image';
const Change = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#eeeeee'}}>
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 20,
          flex: 1,
          borderRadius: 5,
        }}>
        <View>
          <ImageBackground
            source={imagePath.ColoredBackground}
            style={{width: '100%', height: 140}}>
            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                right: 20,
                top: 10,
              }}>
              <TouchableOpacity>
                <Image
                  source={imagePath.Edit}
                  style={{height: 10, width: 10, backgroundColor: 'black'}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View style={{marginTop: 10}}>
                <Text
                  style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                  BE HEARD NOW
                </Text>
                <Text style={{color: 'white', fontSize: 7, fontWeight: 'bold'}}>
                  Neurostrom,your brand,your Ton,your Voice
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  marginTop: 5,
                  borderColor: 'red',
                  width: '30%',
                  flex: 1,
                  flexDirection: 'row',
                }}></View>
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <Image source={imagePath.Mic} style={styles.micstyle} />
                <Image source={imagePath.Mic} style={styles.micstyle} />
                <Image source={imagePath.Mic} style={styles.micstyle} />
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={{alignItems: 'center', marginTop: -50}}>
          <Image
            source={imagePath.Logo}
            style={{
              height: 100,
              width: 100,
              borderWidth: 8,
              borderColor: 'white',
              borderRadius: 50,
            }}
          />
        </View>

        <View>
          <Text
            style={{
              color: 'darkblue',
              fontWeight: 'bold',
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            1.personal information
          </Text>
        </View>
        <View style={{marginHorizontal: 20, marginBottom: 40}}>
          <View>
            <Text style={{marginTop: 10, fontSize: 10}}>UserName</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.PlaceHolderUser}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Your Name"
                  multiline={true}
                  style={{}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>

          {/* <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>  */}
          <View style={{}}>
            <Text style={{marginTop: 10, fontSize: 10}}>First Name</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.PlaceHolderUser}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="First Name"
                  multiline={true}
                  style={{}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
          <View style={{}}>
            <Text style={{marginTop: 10, fontSize: 10}}>Last Name</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.PlaceHolderUser}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Last Name"
                  multiline={true}
                  style={{}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
          {/* </View> */}

          <View>
            <Text style={{marginTop: 10, fontSize: 10}}>Email Address</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.EmailNeurostrom}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="jack@yopmail.com"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>

          <View>
            <Text style={{marginTop: 10, fontSize: 10}}>Mobile Number</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.SmartPhone}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="+1-557445587445"
                  multiline={true}
                  keyboardType="numeric"
                  style={{}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 20,
          flex: 1,
          borderRadius: 5,
          marginTop: 10,
        }}>
        <View>
          <Text
            style={{
              color: 'darkblue',
              fontWeight: 'bold',
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            2. other information
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>Location</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.Location}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Street 656 London"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
          <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>Country</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.Country}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="England"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
          <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>State</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.State}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="London"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
          <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>City</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.City}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Gergoia"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
          <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>Tier Level</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.Tier}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Tier 1"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View></View>
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 20,
          flex: 1,
          borderRadius: 5,
          marginTop: 10,
        }}>
        <View>
          <Text
            style={{
              color: 'darkblue',
              fontWeight: 'bold',
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            3. edit demograpics
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>Location</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.Location}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Street 656 London"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
          <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>Location</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.Location}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Street 656 London"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
          <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>Location</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.Location}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Street 656 London"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
          <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>Location</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.Location}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Street 656 London"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
          <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>Location</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.Location}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Street 656 London"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>
           <View style={{margin: 5}}>
            <Text style={{marginTop: 10, fontSize: 10}}>Location</Text>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.Location}
                  style={{height: 20, width: 20, marginTop: 15}}
                />
                <TextInput
                  placeholder="Street 656 London"
                  multiline={true}
                  style={{marginHorizontal: 10}}></TextInput>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eeeeee',
                  marginTop: -5,
                }}></View>
            </View>
          </View>

        </View>




      </View>
    </ScrollView>
  );
};

export default Change;

const styles = StyleSheet.create({
  micstyle: {
    height: 10,
    width: 10,
    marginHorizontal: 10,
  },
});
