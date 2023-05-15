import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'

/**
 * This is the main entry point for your plugin.
 *
 * All information regarding plugin development can be found at
 * https://developer.vatom.com/spaces/plugins-in-spaces/guide-create-plugin
 *
 * @license MIT
 * @author Vatom Inc.
 */
export default class MoodSwitchPlugin extends BasePlugin {
  //================ properties of class QueueNextVideoPlugin

  // Plugin ID
  static get id()             { return 'mood-switch-plugin' }
  static get name()           { return 'Mood Switch Plugin' } 
  static get description()    { return "Demonstrates the ability to adjust lighting"
    + " and ambiance from plugin code." }
  //
  isMoodHigh = false;


  //================ methods for class QueueNextVideoPlugin

  onLoad() {
    // Create BtnA - MLK video
    this.menus.register({
        icon: this.paths.absolute('button-icon.png'),
        text: 'Toggle Mood',
        action: () => this.onMoodChangeBtn()
    });

  }// onLoad()
  

  onMoodChangeBtn() {
    // Toggle mood.
    this.isMoodHigh = ! this.isMoodHigh;
    // Announce via toast message.
    this.menus.toast({
      text: 'Mood changing to '
        + (this.isMoodHigh ? 'high' : 'low'),
      duration: 2000
    });
  }// onMoodChangeBtn()


}// class MoodSwitchPlugin ===============================================================
