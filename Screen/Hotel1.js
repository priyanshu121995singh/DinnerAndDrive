import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Modal,
  SafeAreaView,
  ToastAndroid,
  Animated,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import imagePath from './Image';
import Helper from './lip/Helper';
import {SliderBox} from 'react-native-image-slider-box';
import RNPickerSelect from 'react-native-picker-select';
import StarRating from 'react-native-star-rating';
import {
  AmHere,
  Going,
  GoingHere,
  IAmHere,
  LikeFavroute,
  RestaurentDetails,
  Search,
  VisitHere,
} from './lip/ApiUrl';
import ImagePicker from 'react-native-image-crop-picker';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModel] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModel();
  }, [visible]);

  const toggleModel = () => {
    if (visible) {
      setShowModel(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDrive: true,
      }).start();
    } else {
      setTimeout(() => setShowModel(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDrive: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modelBackground}>
        <Animated.View
          style={[styles.modelContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};
const ModalPoups = ({visible, children}) => {
  const [showModals, setShowModels] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModels();
  }, [visible]);

  const toggleModels = () => {
    if (visible) {
      setShowModels(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDrive: true,
      }).start();
    } else {
      setTimeout(() => setShowModels(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDrive: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={showModals}>
      <View style={styles.modelBackground}>
        <Animated.View
          style={[styles.modelContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Hotel1 = ({navigation, route}) => {
  let arr = [];
  const [masterdata,setMasterData]=useState([])
  const [foodDetails, setfoodDetails] = useState([]);
  const [nameCatagory, setnameCatagory] = useState([]);
  const [details, setdetails] = useState([]);
  const [listId, setlistId] = useState(route.params?.id);
  const [name, setname] = useState();
  const [favorite, setfavorite] = useState();
  const [_id, set_id] = useState(null);
  const [restaurentId, setrestaurentId] = useState();
  console.log('---------listId: ', listId);

  useEffect(() => {
    HotalApi();
  }, []);
  const HotalApi = () => {
    Helper.showLoader();

    Helper.makeRequest({url: RestaurentDetails + `${listId}`, method: 'GET'})
      .then(response => {
        if (response.success == true) {
          setfoodDetails(response.data.foodDetails);
          setMasterData(response.data.foodDetails)
          setnameCatagory(response.data.nameCategory);
          setdetails(response.data.details[0].additional_image_url);
          setrestaurentId(response.data.details[0]._id);
          // console.log("======>>>>>getApisffsfsfsfrsfsffd: ",response.data.details[0].additional_image_url.length)
          // console.log(
          //   '======>>>>>getApisffsfsfsfrsfsffddetailsdetails ',
          //   JSON.stringify(response),
          // );
          setname(response.data.details[0]);
          setfavorite(response.data.details[0].is_favorite);
          // set_id(response.data.foodDetails),
          Helper.hideLoader();
          Helper.showToast(response.message);
        } else {
          Helper.hideLoader();
          Helper.showToast(response.message);
        }
      })
      .catch(error => {
        Helper.showToast(error);
      });
  };
  const [going, setGoing] = useState();
  const [restaurentid, Setrestaurentid] = useState();
  const [yelp_id, Setyelp_id] = useState();
  const GoingApi = key => {
    console.log(
      '{{{{{{{{{{{{{{{{{{{{{{{++++++++++++_________}}}}}}}}}}}}}}',
      key,
    );
    var data = {
      restaurantId: restaurentId,
      yelp_id: restaurentId,
      goinghere: 1,
      iamhere: 0,
    };

    Helper.showLoader();
    Helper.makeRequest({url: Going, method: 'POST', data: data})
      .then(response => {
        console.log('+++++++++++++++7627056875', JSON.stringify(response));
        if (response.success == true) {
          setGoing(response.data.data.goinghere);
          Helper.hideLoader();
          Helper.showToast(response.message);
        } else {
          Helper.hideLoader();
          Helper.showToast(response.message);
        }
      })
      .catch(err => {
        Helper.showToast(err);
        Helper.hideLoader();
      });
  };
  const [restaurenthere, Setrestaurenthere] = useState();
  const [yelpid, Setyelpid] = useState();
  const VisitHereApi = () => {
    var data = {
      restaurantId: restaurentId,
      yelp_id: restaurentId,
      goinghere: 0,
      iamhere: 1,
    };
    Helper.showLoader();
    Helper.makeRequest({url: VisitHere, method: 'POST', data: data})
      .then(response => {
        console.log('********************[-[-[-[-[-[-[-[-[-', response);
        if (response.success == true) {
          Helper.hideLoader();
          Helper.showToast(response.message);
        } else {
          Helper.hideLoader();
          Helper.showToast(response.message);
        }
      })
      .catch(err => {
        Helper.showToast(err);
        Helper.hideLoader();
      });
  };
  // console.log('{{{{}}}}}}}}+++++++++++', going);

  foodDetails.map(x => {
    let obj = {label: x._id, value: x._id};
    arr.push(obj);
  });
  //   console.log("---------arrarr: ", arr)

  const [Like, setLike] = useState('');
  const [Dislike, setDislike] = useState();

  // console.log('DJHDHFGADB,FGCJLHNAKYHYRNRSXCSNUFYS', restaurentId);

  // console.log('---------listId: ');

  const SearchApi = () => {
    Helper.showLoader();

    Helper.makeRequest({url: Search + `${Like}`, method: 'GET'})
      .then(response => {
        console.log(
          '======>>>>>getApiSearchApi--------: ',
          JSON.stringify(response.data.list),
        );
        if (response.success == true) {
          navigation.navigate('MyTabs', {
            screen: 'Notification',
            params: {data: 'fdsjdgfjsdfs'},
          });

          Helper.hideLoader();
          Helper.showToast(response.message);
        } else {
          Helper.hideLoader();
          Helper.showToast(response.message);
        }
      })
      .catch(error => {
        Helper.showToast(error);
      });
  };

  const [press, setpress] = useState();
  const click = () => {
    setpress(!press);
  };
  const [search, SetSearch] = useState();
  const onClick = () => {
    SetSearch(!search);
  };
  // const [like, setlike] = useState();
  // const onlike = () => {
  //   setlike(!like);
  // };

const[comment,setComment]=useState();





  const ReviewApi = () => {
   
    let formdata = new FormData();

    
    
    formdata.append('restaurantId', restaurentId)
    formdata.append('starrating', starCount)
    formdata.append('comment', comment)
    if(image !== undefined){
      formdata.append('image', {
        uri: image,
        name: 'image.jpg',
        type: 'image/jpeg'
    })
    }
    console.log("-----------formdata: ",JSON.stringify(formdata))
        Helper.getData('token').then(token => {
            console.log("======>>>>>>token", token)

            fetch('http://3.222.39.138:3122/restaurants/rating', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    Authorization: token
                },
                body: formdata
            }).then((response) => response.json())
                .then((json) => {
                    console.log("======>>>>>>ReviewApi===============", json)
                    if (json) {
                        navigation.navigate("Hotel1")
                        ToastAndroid.show(json.message, ToastAndroid.SHORT);
                    } else {
                        ToastAndroid.show(json.message, ToastAndroid.SHORT);
                    }


                })
                .catch((error) => {
                    console.error("==================", error);
                });
        })
}











  const FavoritRestaurentAPI = key => {
    console.log('keykeykeykeykeykeykey24625423245648747675468', key);
    var data = {
      restaurantId: restaurentId,
    };

    var abc = 0;
    if (key == true) {
      abc = 1;
    } else {
      abc = 0;
    }
    Helper.showLoader();
    Helper.makeRequest({
      url: LikeFavroute + `${abc}`,
      method: 'POST',
      data: data,
    })
      .then(response => {
        console.log('======>>>>>getApisffsfsfsfrsfsffd222: ', response);

        if (response.success == true) {
          // HotalApi();
          setfavorite(!favorite);

          Helper.hideLoader();
          Helper.showToast(response.message);
        } else {
          Helper.hideLoader();
          Helper.showToast(response.message);
        }
      })
      .catch(err => {
        Helper.showToast(err);
      });
  };
  const renderitem = ({item}) => {
    return (
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginHorizontal: 20, justifyContent: 'center'}}>
            {item.foodItems.map(soitem => {
              // console.log('_id_id_id_id', _id, soitem.food_type);
              {
                if (_id == null) {
                  return (
                    <View>
                      <Text
                        style={{
                          fontSize: 31,
                          color: 'black',
                          fontWeight: 'bold',
                          textTransform: 'capitalize',
                        }}>
                        {soitem.food_type}
                      </Text>

                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                          fontWeight: 'bold',
                        }}>
                        {soitem.food_name}
                      </Text>
                      <Text style={{fontSize: 14, color: 'black'}}>
                        {soitem.description}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                          fontWeight: '700',
                        }}>
                        $ {soitem.price}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                          fontWeight: '500',
                        }}>
                        ({soitem.calories}) calories
                      </Text>
                      {/* <Text style={{ fontSize: 16, color: "black", fontWeight: "500" }}>{soitem.created}</Text> */}
                    </View>
                  );
                } else if (soitem.food_type == _id) {
                  return (
                    <View>
                      <Text
                        style={{
                          fontSize: 31,
                          color: 'black',
                          fontWeight: 'bold',
                          textTransform: 'capitalize',
                        }}>
                        {soitem.food_type}
                      </Text>

                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                          fontWeight: 'bold',
                        }}>
                        {soitem.food_name}
                      </Text>
                      <Text style={{fontSize: 14, color: 'black'}}>
                        {soitem.description}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                          fontWeight: '700',
                        }}>
                        $ {soitem.price}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                          fontWeight: '500',
                        }}>
                        ({soitem.calories}) calories
                      </Text>
                    </View>
                  );
                }
              }
            })}
          </View>
          <View style={{marginTop: 40}}>
            {item.foodItems.map(soitem => {
              {
                if (_id == null) {
                  return (
                    <Image
                      source={{uri: soitem.food_image}}
                      style={{
                        height: 80,
                        width: 90,

                        borderRadius: 20,
                      }}
                    />
                  );
                } else if (soitem.food_type == _id) {
                  return (
                    <Image
                      source={{uri: soitem.food_image}}
                      style={{
                        height: 80,
                        width: 90,

                        borderRadius: 20,
                      }}
                    />
                  );
                }
              }
            })}
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: '#d8d8d8',
          }}></View>
      </View>
    );
  };
  const [image, setImage] = useState();

  const ChangePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  const [starCount, setState] = useState(0);

 const onStarRatingPress = rating => {
    setState(rating);
  };
  // console.log('%#&%*{}{%^}{}%#@$$^', name?.is_going);
  const [visible, setVisible] = useState(false);
  const [visibles, setVisibles] = useState(false);
  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ModalPoup visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
              <Text style={styles.headertext}>
                Did you go to Restaurent {name?.name}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  onPress={() => setVisible(false)}
                  style={styles.Nobutton}>
                  <Text style={styles.NoText}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.YesButton}
                  onPress={() => {
                    setVisibles(true), setVisible(false);
                  }}>
                  <Text style={styles.YesText}>YES</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ModalPoup>
      </View>
      {/* second Model */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ModalPoup visible={visibles}>
          <View style={{}}>
            <View style={styles.header}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                  Your review
                </Text>
              </View>
              <View>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={starCount}
                  fullStarColor={'#ffd64b'}
                  selectedStar={rating => onStarRatingPress(rating)}
                />
              </View>
              <View style={{marginTop: 20}}>
                <TextInput
                value={comment}
                onChangeText={(value) => { setComment(value) }}
                  placeholder="How was your experience"
                  placeholderTextColor="black"
                  multiline={true}
                  style={{
                    color: 'black',

                    textAlignVertical: 'top',
                    backgroundColor: '#efefef',
                    borderRadius: 10,
                    paddingBottom: 40,
                    paddingHorizontal: 20,
                  }}
                />
              </View>
              <TouchableOpacity
                style={{alignItems: 'center', marginTop: 20}}
                onPress={ChangePhoto}>
                <Text style={{fontSize: 15, color: 'blue'}}>
                  Click Here To Uplode Image
                </Text>
              </TouchableOpacity>
              <View style={{alignSelf: 'center', marginTop: 30}}>
                {image !== undefined && (
                  <Image
                    source={{uri: image}}
                    style={{height: 200, width: 280}}
                  />
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  onPress={() => setVisibles(false)}
                  style={[styles.Nobutton, {paddingHorizontal: 25}]}>
                  <Text style={styles.NoText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.YesButton, {paddingHorizontal: 25}]}
                  onPress={() => {
                    setVisibles(false);
                    ReviewApi()
                  }}>
                  <Text style={styles.YesText}>submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ModalPoup>
      </View>

      <View>
        <Image source={imagePath.Header} style={styles.headerimg} />
      </View>

      <View style={styles.headerimgcontent}>
        <Image source={imagePath.Image} style={styles.contentimg} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
        <View>
          <Image source={imagePath.WhiteArrow} style={styles.whiteArrow} />
        </View>
      </TouchableOpacity>
      <View>
        {search ? (
          <View style={{marginTop: -65}}>
            <TextInput
              style={styles.textinput}
              value={foodDetails}
              onChangeText={text => {
                console.log("searchvalue",text)
                setLike(text);
              }}
              onSubmitEditing={() => {
                SearchApi();
              }}
            />
            <TouchableOpacity
              onPress={() => {
                onClick();
              }}>
              <Image source={imagePath.Cross} style={styles.crossimg} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              onClick();
            }}>
            <View>
              <Image source={imagePath.Search} style={styles.searchimg} />
            </View>
          </TouchableOpacity>
        )}
      </View>

      <View style={{width: '100%'}}>
        {/* <Image
            source={{ uri: details }}
            style={styles.foodimg}
           /> */}

        <SliderBox
          images={details}
          //   style={{width:"100%"}}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          currentImageEmitter={index =>
            console.warn(`current pos is: ${index}`)
          }
        />
      </View>
      <View style={styles.restroview}>
        <Text style={styles.restrotext}>{name?.name}</Text>
        <View style={styles.likeview}>
          <TouchableOpacity
            onPress={() => {
              FavoritRestaurentAPI(favorite);
            }}>
            <Image
              source={favorite ? imagePath.Love : imagePath.Dislove}
              style={styles.likeimg}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginLeft: -20, marginRight: 20}}>
          {press ? (
            <TouchableOpacity
              style={{marginTop: 67}}
              onPress={() => {
                click();
                GoingApi();
              }}>
              <View style={{}}>
                <View style={styles.gohereview}>
                  <Text style={styles.goheretext}>Going Here</Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                click();
                VisitHereApi();
                setVisible(true);
              }}>
              <View style={{marginTop: 67}}>
                <View style={styles.iamview}>
                  <Text style={styles.iamtext}>I am Here</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.distanceview}>
          <Text style={styles.distancetext}>
            {name?.distance.toFixed(2)} miles away
          </Text>
        </View>
        <View>
          <Image source={imagePath.Star} style={styles.star} />
        </View>
        <View>
          <Text style={styles.review}>{name?.review_count}</Text>
        </View>
        <View style={styles.seereview}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Review', {
                name: name,
                restaurentid: restaurentId,
              })
            }>
            <Text style={styles.seereviewtxt}>See Review</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.description}>
            {name?.location.display_address}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          marginHorizontal: 20,
        }}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 22, color: '#000000'}}>All Dishes</Text>
        </View>

        <View style={{width: '50%', borderRadius: 20}}>
          <RNPickerSelect
            // placeholder={{ label: 'Select City', value: 'Select City' }}
            onValueChange={value => {
              console.log('valuevaluevalue', value);
              set_id(value);
            }}
            items={arr}
            style={pickerStyle}
            useNativeAndroidPickerStyle
          />
        </View>
      </View>

      <FlatList
        data={foodDetails}
        keyExtractor={(item, index) => {
          item.fooditems;
        }}
        renderItem={renderitem}
      />
    </ScrollView>
    // <View>
    //   <Notification
    //     source={imagePath.Header}
    //     sources={imagePath.Image}
    //     images={details}
    //     reviewcount="3.5"
    //     distance="6"
    //     foodDetails={foodDetails}
    //     name={name}
    //     Id={_id}
    //     nameCatagory={nameCatagory}
    //     onPress={() => navigation.navigate('MyTabs')}
    //     descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    // </View>
  );
};
export default Hotel1;

const styles = StyleSheet.create({
  textinput: {
    height: 63,
    borderWidth: 1,
    paddingLeft: 20,

    borderColor: '#009688',
    backgroundColor: 'white',
  },
  crossimg: {
    height: 23,
    width: 24,
    zIndex: 4,
    marginLeft: 320,
    top: -45,
  },
  headerimg: {
    height: 60,
    width: '100%',
  },
  headerimgcontent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentimg: {
    height: 60,
    width: 80,
    marginTop: -60,
  },
  whiteArrow: {
    marginTop: -44,
    marginHorizontal: 10,
  },
  searchimg: {
    marginLeft: 320,
    marginTop: -35,
    height: 20,
    width: 20,
  },
  foodimg: {
    height: 160,
    width: '100%',
  },
  restroview: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 8,
    marginHorizontal: 20,
    paddingVertical: 50,
    marginTop: -30,
    paddingBottom: 20,
  },
  restrotext: {
    marginHorizontal: 30,
    marginTop: -40,
    fontSize: 15,
    color: '#000000',
  },
  gohereview: {
    marginLeft: 240,
    marginTop: -90,
    borderRadius: 10,
    paddingVertical: 5,
    backgroundColor: '#35c9b3',
  },
  goheretext: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
  iamview: {
    marginLeft: 240,
    marginTop: -90,
    borderRadius: 10,
    paddingVertical: 5,
    backgroundColor: '#35c9b3',
  },
  iamtext: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
  distanceview: {
    marginTop: -60,
    marginHorizontal: 40,
  },
  distancetext: {
    fontSize: 9,
    color: '#000000',
  },
  star: {
    height: 10,
    width: 10,
    marginLeft: 130,
    marginTop: -10,
  },
  review: {
    color: '#000000',
    fontSize: 9,
    marginLeft: 120,
    marginTop: -11,
  },
  seereview: {
    marginLeft: 150,
    marginTop: -13,
  },
  seereviewtxt: {
    fontSize: 8,
    color: '#35c9b3',
  },
  description: {
    fontSize: 10,
    marginHorizontal: 22,
    marginLeft: 40,
    color: '#000000',
    marginTop: 6,
  },
  likeview: {
    marginLeft: 170,
    marginTop: -20,
  },
  likeimg: {
    height: 20,
    width: 23,
  },
  modelBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  Nobutton: {
    backgroundColor: '#35c9b3',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 7,
  },
  headertext: {
    textAlign: 'center',
    fontSize: 18,
  },

  NoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  YesButton: {
    borderColor: '#35c9b3',
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 7,
  },
  YesText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#35c9b3',
  },
});

const pickerStyle = StyleSheet.create({
  inputIOS: {
    // color: 'red',
    // paddingTop: 19,
    // paddingHorizontal: 10,
    // paddingBottom: 12,
    // backgroundColor: "red"
  },
  inputAndroid: {
    color: '#000',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
