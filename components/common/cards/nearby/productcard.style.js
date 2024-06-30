import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // flexDirection: 'row',
    // padding: SIZES.medium,
    marginBottom: SIZES.medium,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    width: '48%', 
  },
  contentContainer:{

  },
  logoContainer: {
    width: '100%',
    height: 150,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.small,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  Name: {
    fontSize: SIZES.small,
    fontFamily: 'DMBold',
    color: COLORS.primary,
    marginBottom: SIZES.small,
  },
  price: {
    fontSize: SIZES.small + 2,
    fontFamily: 'DMRegular',
    color: COLORS.gray,
  },
});

export default styles;
