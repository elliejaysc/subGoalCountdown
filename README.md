# subGoalCountdown

**Setup**

1.) Go to your Stream Elements dashboard & create a new blank overlay in My Overlays.

2.) Leave the overlay resolution set to 1080p & click start

3.) Add a custom widget.

4.) Click the Open Editor button on the left.

5.) When the editor opens, remove all the code from each tab (HTML, CSS, JS, & Fields).

6.) Here, on Github, click the name of the file that you want to copy.

7.) When the file view loads, click the Raw button & then copy the raw code displayed on the page.

8.) Paste the code in the respective tab back in the Stream Elements editor.

9.) Repeat steps 6 - 8 for each tab & its corresponding file.

10.) Once this is complete, click Done on the Stream Elements editor & you should now see a new custom built Sub Goal Countdown.

You should also have all of your setup options on the left.

How it works
---

On load, it checks your total number of subs & grabs the last digit (0 - 9).

It subtracts that from the goal number (10) & displays that.

When a sub comes in it subtracts 1 from the goal as it stands. When it hits zero it automatically rolls over to the goal again & adds the asterisk.

The asterisk will stay until you remove it with a chat command (the default is !clearNotice)

The widget also has controls along the left to change the font size, the font color, the stroke size & color, the asterisk color, & the chat command to clear it.

**Please Note:** There's a *!reset* command that is baked in as well, if you ever need to reset the current value to the goal value.
