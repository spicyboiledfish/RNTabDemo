/**
 * Created by wangrui on 17/10/27.
 */
'use strict';
import React, {Component} from 'react';
import  {
    View, Text, StyleSheet,
    TouchableOpacity, Alert, Keyboard, Platform, AsyncStorage, TextInput
} from "react-native";
const styles = StyleSheet.create({
    loginContent: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 38,
    },
    quickLoginContent: {
        marginTop: 38,
    },
    borderLeft: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightColor:'transparent',
        borderRightWidth:1
    },
    borderRight: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderLeftColor:'transparent',
        borderLeftWidth:1
    },
    quickLoginClass: {
        flexDirection: 'row',
        paddingBottom: 12,
        height: 40,
        marginTop: Platform.OS == "android" ? 10 : 0,
    },
    quickLoginClassFlex: {
        flex: 1,
    },
    quickLoginClassTouch: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    quickLoginClassTouchBg: {
        backgroundColor: '#198bff',
    },
    quickLoginClassTouchBorder: {
        borderColor: '#198bff',
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    quickLoginClassTouchRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quickLoginTheme: {
        color: '#198bff',
    },
    quickLoginFontActive: {
        color: '#fff',
    },
    quickLoginFontUnActive: {
        color: '#198bff',
    },
});
export  default class extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            is_active_index: '0'
        };
    }

    /*密码登录*/
    renderLogin() {
        return (
            <View style={{marginBottom: 38}}>
                <Text style={{marginBottom:20}}>右边的tab栏的内容，嘻嘻嘻嘻😝</Text>
            </View>
        )
    }

    /*快捷登录*/
    renderQuickLoginView() {
        return (
            <View style={styles.quickLoginContent}>
                <Text style={{marginLeft:25}}>左边的tab栏的内容哦！！！哔哩哔哩😊</Text>
            </View>
        )
    }

    /*Tab 选择 快捷登录 和 密码登录*/
    renderTabView() {
        var tabData = [
            {
                'id': '0',
                'displayName': '快捷登录',
            },
            {
                'id': '1',
                'displayName': '密码登录',
            }
        ];
        var _this = this;
        return (
            <View>
                <View style={styles.quickLoginClass}>
                    <View style={styles.quickLoginClassFlex}>
                    </View>
                    {
                        tabData.map(function (item, index) {
                            return (
                                _this.showQuickLoginTab(item.id, item.displayName)
                            );
                        })
                    }
                    <View style={styles.quickLoginClassFlex}>
                    </View>
                </View>
            </View>
        )
    }

    /*Tab 每一项选择*/
    showQuickLoginTab(index, displayName) {
        var quickLoginTab;
        if (index == this.state.is_active_index) {
            quickLoginTab = true;
        }
        else {
            quickLoginTab = false;
        }
        let touchStyle = [
            styles.quickLoginClassTouch,
            index == '0' && styles.borderLeft,
            index == '1' && styles.borderRight,
            quickLoginTab && styles.quickLoginClassTouchBg,
            !quickLoginTab && styles.quickLoginClassTouchBorder
        ];
        let textStyle = [
            quickLoginTab && styles.quickLoginTheme,
            quickLoginTab && styles.quickLoginFontActive,
            !quickLoginTab && styles.quickLoginFontUnActive
        ];
        return (
            <TouchableOpacity
                key={index}
                onPress={() => {
                    this.setState({
                        is_active_index: index
                    });
                }}>
                <View
                    style={touchStyle}>
                    <Text
                        style={textStyle}>
                        {displayName}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', marginTop: 100}}>
                {this.renderTabView()}
                {
                    this.state.is_active_index == '0' ?
                        this.renderQuickLoginView() :
                        <View style={styles.loginContent}>
                            {this.renderLogin()}
                        </View>
                }
            </View>
        )
    }
}
