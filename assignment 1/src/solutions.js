/**
 * WEB222 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: <Pawan Deep>
 *      Student ID: <111144218>
 *      Date: <24/01/2022>
 *
 * Please see all unit tests in the files problem-00.test.js, problem-01.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to implement code to pass unit tests.
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code, and how to understand the
 * tests that go with it.
 *
 * In addition to this file, please also open the src/problem-00.test.js file.
 * Start by reading the comment at the top of that file, then come back here and
 * continue.
 *
 * Make sure you have completed the necessary Setup (install node.js, run `npm install`
 * before continuing).  The rest of the instructions assume that you have done this.
 *
 * After you finish reading src/problem-00.test.js, it's time to try running
 * the tests.  To run the tests, go to your terminal and type the following command:
 *
 *   npm test
 *
 * You have to run this command in the root of your project (i.e., in the same
 * directory as package.json).  When you do, you will see a lot of failures.
 * That's expected, since we haven't written any solution code yet.
 *
 * You can also run tests for only this problem instead of everything. To do that:
 *
 *   npm test problem-00
 *
 * This will look for tests that are part of the problem-00.test.js file, and only
 * run those.  Doing so should result in 1 failed and 1 passed test.
 *
 * The first test passes:
 *
 *  ✓ greeting should be a function (2ms)
 *
 * But the second one fails:
 *
 * ✕ greeting should return the correct string output (3ms)
 *
 * ● Problem 0 - greeting() function › greeting should  return the correct string output
 *
 *   expect(received).toBe(expected) // Object.is equality
 *
 *   Expected: "Hello WEB222 Student!"
 *   Received: "Hello WEB222 Student"
 *
 *     63 |   test('greeting should return the correct string output', function() {
 *     64 |     let result = greeting('WEB222 Student');
 *   > 65 |     expect(result).toBe('Hello WEB222 Student!');
 *        |                    ^
 *     66 |   });
 *     67 |
 *     68 |   /**
 *
 * We can see that the second test 'greeting should return the correct string output'
 * is failing. In particular, it's failing because it expected to get the string
 * "Hello WEB222 Student!" but instead it actually received the string "Hello WEB222 Student".
 *
 * It looks like we have a small typo in our code below, and we are missing
 * the final "!"" character.  Try adding it below, save this file, and re-run the
 * tests again:
 *
 * npm test problem-00
 * PASS  src/problem-00.test.js
 *  Problem 0 - greeting() function
 *   ✓ greeting should be a function (2ms)
 *   ✓ greeting should return the correct string output
 *
 * Test Suites: 1 passed, 1 total
 * Tests:       2 passed, 2 total
 *
 * Excellent! At this point you're ready to move on to Problem 1. As you do,
 * read both the information in the Problem's comment, and also read the tests
 * to understand what they expect from your code's implementation.
 *
 * One final word about these comments.  You'll see comments like this one:
 *
 * @param {string} name - the name to greet in the message
 * @returns {string}
 *
 * These are specially formatted comments that define parameters to functions,
 * and tell us the type (e.g., {string} or {number}), and also the parameter's name.
 * We also indicate the return type for functions.
 *
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 ******************************************************************************/

function greeting(name) {
  return `Hello ${name}!`;
}

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscore
 * ('_'), and makes it lowercase.
 *
 * We want to be able to convert a string to Lower Snake Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are lower cased.
 *
 * The snake() function should work like this:
 *
 * snake('abc') --> returns 'abc'
 * snake(' ABC ') --> returns 'abc'
 * snake('ABC') --> returns 'abc'
 * snake('A BC') --> returns 'a_bc'
 * snake(' A bC  ') --> returns 'a-bc'
 * snake('A   BC') --> returns 'a_bc'
 * snake('A.BC') --> returns 'a_bc'
 * snake(' A..  B   C ') --> returns 'a_b_c'
 *
 * @param {string} value - a string to be converted
 * @return {string}
 ******************************************************************************/

function snake(value) {
  let result = value.toLowerCase().trim().replace(/\./g, ' ').replace(/\s+/g, '_');
  return result;
}

/*******************************************************************************
 * Problem 2: create an HTML <video> element for the given url.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to video:
 *
 * http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image? or a video?), we have to use special markup. The <video>
 * tag is how we specify that a URL is to be interpreted as a video, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 *
 * Here is how we might use HTML to markup this video:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>
 *
 * Our <video> has two attributes:
 *
 * - src: the URL to a video file
 * - width: the width to use (in pixels) when showing the video
 *
 * Write the createVideo() function to accept a URL and width, and return the
 * properly formatted video element.  For example:
 *
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 *
 * should return the following string of HTML:
 *
 * '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
 *
 * A <video> can also optionally contain a `controls` attribute, which turns on the play/pause/etc controls. For example:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>
 *
 * In this case, the <video> element should include the user controls.  Therefore,
 * your createVideo() function should also accept a third argument, controls:
 *
 * // No controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 * // With controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true)
 *
 * The returned <video> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and width attribute values should be wrapped in double-quotes (e.g., src="..." width="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." width="..." controls)
 * - The width attribute should only be added if a valid integer value (number or string) is included.  Otherwise ignore it.
 *
 * @param {string} src - the src URL for the video
 * @param {string|number} width - the width of the video. Must be a valid, positive integer
 * @param {boolean} controls - whether to include the controls or not
 * @returns {string}
 ******************************************************************************/

function createVideo(src, width, controls) {
  src = src.trim();

  src = '<video src="'.concat(src).concat('"');
  let output = src;
  if (width > 0 && width % 1 === 0) {
    width = ' width="'.concat(width).concat('"');
    output = output.concat(width);
  }
  if (controls === true) {
    output = output.concat(' controls');
  }
  output = output.concat('></video>');
  return output;
}

/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * January 1, 2021 would therefore be the following date string:
 *
 * 2021-01-01
 *
 * Similarly, September 29, 2021 would be:
 *
 * 2021-09-29
 *
 * Write a function, parseDateString() that accepts a date string of the format
 * specified above, and returns a JavaScript Date object, set to the correct day.
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * To help developers using your function, you are asked to provide detailed error
 * messages when the date string is formatted incorrectly.  We will use the `throw`
 * statement to throw an Error object when a particular value is not what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01-01-01') should fail, because the year is
 * not 4 digits.
 *
 * Similarly, parseDateString('2021-1-01') should fail because
 * the day is not 2 digits, and parseDateString('2021-01-1') should fail because
 * the month is not 2 digits.
 *
 * Also, a totally invalid date string should also
 * cause an exception to be thrown, for example parseDateString(null) or
 * parseDateString("this is totally wrong").
 *
 * @param {string} value - a date string
 * @returns {Date}
 ******************************************************************************/

function parseDateString(value) {
  if (!(value && /^\d{4}-\d{2}-\d{2}$/.test(value))) {
    throw new Error('invalid date string, expected a `YYYY-DD-MM` formatted string');
  }
  var array = value.split('-');
  let date = new Date();
  date.setFullYear(Number(array[0]));
  date.setMonth(Number(array[1]) - 1);
  date.setDate(Number(array[2]));
  return date;
}

/*******************************************************************************
 * Problem 4: convert Date to date string with specified format.
 *
 * As above, a date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object, and returns a
 * date string formatted according to the specification above. Make sure your
 * day and month values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
 *
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021-01-29)) should return '2021-01-29'
 *
 * If an invalid Date is passed, throw an Error object with an appropriate error message.
 * HINT: use try/catch, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 * @param {Date} value - a date
 * @returns {string}
 ******************************************************************************/

function toDateString(value) {
  var month = value.getMonth();
  var year = value.getFullYear();
  var day = value.getDate();
  var date;
  if (day < 10 && month > 8) {
    date = `${year}-${month + 1}-0${day}`;
  } else if (month < 11 && day > 8) {
    date = `${year}-0${month + 1}-${day}`;
  } else if (month < 11 && day < 10) {
    date = `${year}-0${month + 1}-0${day}`;
  } else {
    date = `${year}-${month + 1}-${day}`;
  }

  try {
    parseDateString(date);
  } catch (error) {
    throw new Error(error);
  }
  return date;
}

/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * A example, the Seneca College Newnham campus is located at:
 *
 * Longitude: -79.3496 (negative number means West)
 * Latitude: 43.7955 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "43.7955,-79.3496" NOTE: no space
 * 4. "[-79.3496, 43.7955]" NOTE: the space, as well as lat/lng values are reversed
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the form: "(lat, lng)"
 *
 * @param {string} value - a geographic coordinate string in one of the given forms
 * @returns {string} - a geographic coordinate formatted as "(lat, lng)"
 ******************************************************************************/

function normalizeCoord(value) {
  let coo = value.split(',', 2);
  let long;
  let lat;
  let len;
  if (coo[1][0] === ' ') {
    long = coo[0].substring(1);
    len = coo[1].length;
    lat = coo[1].substring(1, len - 1);
  } else {
    lat = coo[0];
    long = coo[1];
  }
  if (lat > 90 || lat < -90) {
    throw 'invalid latitude';
  }
  if (long > 180 || long < -180) {
    throw 'invalid longitude';
  }
  return `(${lat}, ${long})`;
}

/*******************************************************************************
 * Problem 6: format any number of coordinates as a list in a string
 *
 * You are asked to format geographic lat, lng coordinates in a list using your
 * normalizeCoord() function from problem 5.
 *
 * Where normalizeCoord() takes a single geographic coord, the formatCoords()
 * function takes a list of any number of geographic coordinates, parses them,
 * filters out any invalid coords, and creates a list.
 *
 * For example: given the following coords, "43.7955,-79.3496" and "[-62.1234, 43.7955]",
 * a new list would be created of the following form "((43.7955, -79.3496), (43.7955, -62.1234))".
 *
 * Notice how the list has been enclosed in an extra set of (...) braces, and each
 * formatted geographic coordinate is separated by a comma and space.
 *
 * The formatCoords() function can take any number of arguments, but they must all
 * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
 * an Error is thrown), skip the value.  For example:
 *
 * formatCoords("43.7955,-79.3496", "[-62.1234, 43.7955]", "300,-9000") should return
 * "((43.7955, -79.3496), (43.7955, -62.1234))" and skip the invalid coordinate.
 *
 * @param {number} arguments - any number of string arguments can be passed
 * @returns {string}
 ******************************************************************************/

function formatCoords(...values) {
  var output = '(';
  for (let i = 0; i < values.length; i++) {
    var coord = values[i].split(',', 2);
    let long;
    let lat;
    let len;
    if (coord[1][0] === ' ') {
      long = coord[0].substring(1);
      len = coord[1].length;
      lat = coord[1].substring(1, len - 1);
    } else {
      lat = coord[0];
      long = coord[1];
    }
    if (long < 180 && long > -180 && lat < 90 && lat > -90) {
      output = output.concat(normalizeCoord(values[i]));
      if (i !== values.length - 1) {
        output = output.concat(', ');
      }
    }
  }
  output = output.concat(')');
  return output;
}

/*******************************************************************************
 * Problem 7: determine MIME type from filename extension
 *
 * Web browsers and servers exchange streams of bytes, which must be interpreted
 * by the receiver based on their type.  For example, an HTML web page is
 * plain text, while a JPG image is a binary sequence.
 *
 * The Content-Type header contains information about a resource's MIME type, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
 * The type is general, for example, 'text' or 'video'.  The subtype is more
 * specific, indicating the specific type of text, image, video, etc.  See:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *
 * A number of common types are used in web development:
 *
 * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
 *
 * Your mimeFromFilename() function should support all of the following extensions
 * with and without the leading '.':
 *
 * - .html, .htm --> text/html
 * - .css --> text/css
 * - .js --> text/javascript
 * - .jpg, .jpeg --> image/jpeg
 * - .gif --> image/gif
 * - .bmp --> image/bmp
 * - .ico, .cur --> image/x-icon
 * - .png --> image/png
 * - .svg --> image/svg+xml
 * - .webp --> image/webp
 * - .mp3 --> audio/mp3
 * - .wav --> audio/wav
 * - .mp4 --> video/mp4
 * - .webm --> video/webm
 * - .json --> application/json
 * - .mpeg --> video/mpeg
 * - .csv --> text/csv
 * - .ttf --> font/ttf
 * - .woff --> font/woff
 * - .zip --> application/zip
 * - .avi --> video/x-msvideo
 *
 *
 * NOTE: any other extension should use the `application/octet-stream` MIME type,
 * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
 * also use `application/octet-stream` if the file has no extension.
 *
 * @param {string} filename - a filename
 * @returns {string}
 ******************************************************************************/

function mimeFromFilename(filename) {
  var extension = filename.split('.');
  var len = extension.length;
  var output;
  switch (extension[len - 1]) {
    case 'html':
    case 'css':
    case 'csv':
      output = `text/${extension[len - 1]}`;
      break;
    case 'htm':
      output = `text/html`;
      break;
    case 'js':
      output = `text/javascript`;
      break;
    case 'jpeg':
    case 'gif':
    case 'bmp':
    case 'png':
    case 'webp':
      output = `image/${extension[len - 1]}`;
      break;
    case 'jpg':
      output = `image/jpeg`;
      break;
    case 'ico':
    case 'cur':
      output = `image/x-icon`;
      break;
    case 'svg':
      output = `image/${extension[len - 1]}+xml`;
      break;
    case `mp3`:
    case `wav`:
      output = `audio/${extension[len - 1]}`;
      break;
    case 'webm':
    case 'mp4':
    case 'mpeg':
      output = `video/${extension[len - 1]}`;
      break;
    case 'avi':
      output = `video/x-msvideo`;
      break;
    case 'json':
    case 'zip':
      output = `application/${extension[len - 1]}`;
      break;
    case 'ttf':
    case 'woff':
      output = `font/${extension[len - 1]}`;
      break;
    default:
      output = `application/octet-stream`;
      break;
  }
  return output;
}

/*******************************************************************************
 * Problem 8, Part 1: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
 * so that the URL opens in a blank tab/window.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 * @param {string} licenseCode - a license code
 * @param {bool} targetBlank - whether to open the link in a new tab/window
 * @returns {string}
 ******************************************************************************/

function generateLicenseLink(licenseCode, targetBlank) {
  if (licenseCode != null) {
    licenseCode = licenseCode.substring(3).toLowerCase();
  }
  var fullform;
  var output;

  if (targetBlank === true) {
    var target = ` target="_blank"`;
    switch (licenseCode) {
      case 'by':
        fullform = 'Creative Commons Attribution License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/"${target}>${fullform}</a>`;
        break;
      case 'by-nc':
        fullform = 'Creative Commons Attribution-NonCommercial License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/"${target}>${fullform}</a>`;
        break;
      case 'by-sa':
        fullform = 'Creative Commons Attribution-ShareAlike License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/"${target}>${fullform}</a>`;
        break;
      case 'by-nd':
        fullform = 'Creative Commons Attribution-NoDerivs License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/"${target}>${fullform}</a>`;
        break;
      case 'by-nc-sa':
        fullform = 'Creative Commons Attribution-NonCommercial-ShareAlike License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/"${target}>${fullform}</a>`;
        break;
      case 'by-nc-nd':
        fullform = 'Creative Commons Attribution-NonCommercial-NoDerivs License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/"${target}>${fullform}</a>`;
        break;
      default:
        fullform = 'All Rights Reserved';
        output = `<a href="https://choosealicense.com/no-permission/"${target}>${fullform}</a>`;
        break;
    }
  } else {
    switch (licenseCode) {
      case 'by':
        fullform = 'Creative Commons Attribution License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/">${fullform}</a>`;
        break;
      case 'by-nc':
        fullform = 'Creative Commons Attribution-NonCommercial License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/">${fullform}</a>`;
        break;
      case 'by-sa':
        fullform = 'Creative Commons Attribution-ShareAlike License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/">${fullform}</a>`;
        break;
      case 'by-nd':
        fullform = 'Creative Commons Attribution-NoDerivs License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/">${fullform}</a>`;
        break;
      case 'by-nc-sa':
        fullform = 'Creative Commons Attribution-NonCommercial-ShareAlike License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/">${fullform}</a>`;
        break;
      case 'by-nc-nd':
        fullform = 'Creative Commons Attribution-NonCommercial-NoDerivs License';
        output = `<a href="https://creativecommons.org/licenses/${licenseCode}/4.0/">${fullform}</a>`;
        break;
      default:
        fullform = 'All Rights Reserved';
        output = `<a href="https://choosealicense.com/no-permission/">${fullform}</a>`;
        break;
    }
  }
  return output;
}

/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function pureBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value, according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values, return `true` (Boolean)
 * 3. If the value is one of the "false" type values, return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 * @param {string|number|boolean|} value - a value to convert to true/false
 * @returns {bool}
 ******************************************************************************/

function pureBool(value) {
  var output;
  if (value != undefined || value != null) {
    if (value > 0) {
      output = true;
    } else if (value <= 0) {
      output = false;
    } else if (
      value.toLowerCase() === 'yes' ||
      value.toLowerCase() === 'y' ||
      value.toLowerCase() === 'oui' ||
      value.toLowerCase() === 'o' ||
      value.toLowerCase() === 't' ||
      value.toLowerCase() === 'true' ||
      value.toLowerCase() === 'vrai' ||
      value.toLowerCase() === 'v'
    ) {
      output = true;
    } else if (
      value.toLowerCase() === 'no' ||
      value.toLowerCase() === 'non' ||
      value.toLowerCase() === 'n' ||
      value.toLowerCase() === 'false' ||
      value.toLowerCase() === 'f' ||
      value.toLowerCase() === 'faux'
    ) {
      output = false;
    }
  } else {
    throw 'invalid value';
  }

  return output;
}

/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * every('Y', 'yes', 1) --> returns true
 * any('Y', 'no', 1) --> returns true
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/

function every() {
  var output;
  var counter = arguments.length;
  for (let i = 0; i < counter; i++) {
    var result = pureBool(arguments[i]);
    if (result === true) {
      output = true;
    } else if (result === false) {
      output = false;
    }
  }
  return output;
}

function any() {
  var output;
  var counter = arguments.length;
  var t = 0;
  var f = 0;
  for (let i = 0; i < counter; i++) {
    var result = pureBool(arguments[i]);
    if (result === true) {
      t = t + 1;
    } else if (result === false) {
      f = f + 1;
    }
  }
  if (t > f) {
    output = true;
  } else {
    output = false;
  }
  return output;
}

function none() {
  var output;
  var counter = arguments.length;
  for (let i = 0; i < counter; i++) {
    var result = pureBool(arguments[i]);
    if (result === false) {
      output = true;
    } else if (result === true) {
      output = false;
    }
  }
  return output;
}

/*******************************************************************************
 * Problem 10 - build a URL
 *
 * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
 * for data involves formatting a URL in a particular way.  As we know from
 * week 1, a URL can contain optional name=value pairs, see: https://web222.ca/weeks/week01/#urls
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - order: a string indicating sort order, with possible values of `ascending` or `descending`
 * - count: a number from 1 to 50, indicating how many results to return per page
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
 * a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
 *
 * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {string} query the query to use. Must be properly URI encoded
 * @param {string} order the sort order to use, must be one of `ascending` or `descending`
 * @param {number} count the number of results per page, must be 1-50
 * @param {string} license the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 * @returns {string} the properly formatted iNaturalist URL
 ******************************************************************************/

function buildUrl(query, order, count, license) {
  let output;
  if (count > 50 || count < 1) {
    throw 'error';
  } else if (!(order === 'ascending' || order === 'descending')) {
    throw 'error';
  } else if (
    !(
      license === 'none' ||
      license === 'any' ||
      license === 'cc-by' ||
      license === 'cc-by-nc' ||
      license === 'cc-by-sa' ||
      license === 'cc-by-nd' ||
      license === 'cc-by-nc-sa' ||
      license === 'cc-by-nc-nd'
    )
  ) {
    throw 'error';
  } else {
    output = `https://api.inaturalist.org/v2/observations?query=${query}&count=${count}&order=${order}&license=${license}`;
  }
  return output;
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.greeting = greeting;
exports.snake = snake;
exports.createVideo = createVideo;
exports.parseDateString = parseDateString;
exports.toDateString = toDateString;
exports.normalizeCoord = normalizeCoord;
exports.formatCoords = formatCoords;
exports.mimeFromFilename = mimeFromFilename;
exports.generateLicenseLink = generateLicenseLink;
exports.pureBool = pureBool;
exports.every = every;
exports.any = any;
exports.none = none;
exports.buildUrl = buildUrl;
